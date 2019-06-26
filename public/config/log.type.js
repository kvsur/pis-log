(self => {
    var logTypes = [
        {
            value: 'pisLog',
            label: '会见系统日志',
        },
        {
            value: 'voiceGatewayLog',
            label: '语音网关日志',
        },
        {
            value: 'voiceRecognitionLog',
            label: '语音识别日志',
        },
        {
            value: 'softSwitchLog',
            label: '软交换日志',
        },
    ];
    self.localStorage.setItem('logTypes', JSON.stringify(logTypes));
})(window);