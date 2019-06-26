import React, { Component } from 'react';
import { Button, Checkbox, message } from 'antd';
import { stringify } from 'qs';

import styles from './Log.module.less';

const originTypes = JSON.parse(window.localStorage.getItem('logTypes') || '[]');
const BASE_API = process.env.NODE_ENV === 'development' ? '/api' : '/api';
export default class Log extends Component {
    state = {
        types: [],
        loading: false,
        iconText: '确认导出'
    };

    handleChange = types => {
        this.setState({
            types
        });
    }

    download = () => {
        const { types } = this.state;
        this.setState({
            loading: true,
            iconText: '正在导出...'
        });



        fetch(`${BASE_API}/logDownload/logLoad.do`, {
            credentials: 'include',
            method: 'POST',
            body: stringify({
                dataString: types,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }
        }).then( res => {
            if (res.status >= 200 && res.status < 300) {
                res.blob().then(blob => {
                    const filename = `日志文件压缩包-${new Date().toLocaleString('zh-CN', {hour12: false}).replace(/\//g, '-')}.zip`
                    if (window.navigator.msSaveOrOpenBlob) {
                        navigator.msSaveBlob(blob, filename);
                    } else {
                        const a = document.createElement('a');
                        document.body.appendChild(a);
                        const url = window.URL.createObjectURL(blob);

                        a.href = url;
                        a.download = filename;
                        a.target = '_blank';
                        a.click();
                        a.remove();

                        window.URL.revokeObjectURL(url);
                        message.success('日志已完成导出');
                    }
                })
            } else {
                throw res;
            }
        }).catch(e => {
            console.error(e);
            message.error('日志导出失败');
        }).finally(() => {
            this.setState({
                loading: false,
                types: [],
                iconText: '确认导出'
            });
        })
    }

    render() {
        const { types, loading, iconText } = this.state;
        return (
            <section className={styles.appLog}>
                <header><h3>日志导出:</h3></header>
                <main>
                    <Checkbox.Group value={types} options={originTypes} onChange={this.handleChange} disabled={loading} />
                    <h5 className={styles.logTip}>PS: 目前日志仅保留近14天数据</h5>
                </main>
                <footer>
                    <Button type="primary" loading={loading} onClick={this.download} disabled={types.length < 1}>
                        {iconText}
                    </Button>
                </footer>
            </section>
        );
    }
}
