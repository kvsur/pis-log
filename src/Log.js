import React, { Component } from 'react';
import styles from './Log.less';
import { Button } from 'antd';

export default class Log extends Component {
    render() {
        return (
            <section className={styles.log}><Button>log</Button></section>
        );
    }
}
