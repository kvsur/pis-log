import React, { PureComponent } from 'react';
import { Icon } from 'antd';

import styles from './Header.module.less';

export default class Header extends PureComponent {
    satate = {
        systemName: ''
    };

    componentWillMount() {
        const systemConfig = JSON.parse(window.localStorage.getItem('systemConfig') || '{"systemName":"会见智能化系统"}');
        const { systemName } = systemConfig;
        this.setState({
            systemName,
        });
    }

    render() {
        const { systemName } = this.state;
        return (
            <header className={styles.appHeader}>
                <div className={styles.iconContext}>
                    <Icon type="setting" className={styles.icon} />
                </div>
                <div className={styles.titleContext}>
                    <h2>{systemName}</h2>
                    <h3>开发者模式</h3>
                </div>
            </header>
        );
    }
}
