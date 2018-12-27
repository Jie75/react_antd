export default {
    formateDate: (time) => {
        if (!time) return time;
        let date = new Date(time)
        return `
            ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}  
            ${date.getHours()}:${date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}
        `
    },

    pagination(data, callback) {
        console.log(data)
        return {
            onChange: (current) => {
                callback(current)
            },
            current: Number(data.page),
            pageSize: data.page_size,
            total: data.total,
            showTotal: () => `共${data.total}条数据`,
            showQuickJumper: true
        }
    }
}