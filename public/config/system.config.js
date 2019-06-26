(self => {
    var systemConfig = {
        systemName: '会见智能化系统'
    };
    self.localStorage.setItem('systemConfig', JSON.stringify(systemConfig));
})(window);