export default {
    _: {
        var: '变量',
        fun: '函数',
    },
    data_kind: {
        STRING: '字符串',
        NUMBER: '数值',
        BOOLEAN: '布尔',
        NULL: '空',
        STRINGS: '字符串数组',
        NUMBERS: '数值数组',
        BOOLEANS: '布尔数组',
        ANY: '任意类型'
    },
    diagnostic: {
        unterminated_string_constant: '未终止的字符串常量',
        syntax_error: '公式语法错误',
        format_error: '期望格式为[{expect}],实际为[{real}]',
        bracket_error: '括号格式错误',
        binary_expression_error: '二元表达式格式错误',
        conditional_expression_error: '条件表达式格式错误',
        var_fun_not_exist_error: '变量/函数不存在',
        var_not_exist_error: '变量不存在',
        fun_not_exist_error: '函数不存在',
        param_not_exist_error: '缺少参数',
        fun_format_error: '函数格式错误',
        namespace_not_exist_error: '命名空间不存在',
        param_length_error: '期望参数长度为[{expect}],实际为[{real}]',
    },
    executor: {
        param_value_not_exist_error: '参数 [{var}] 值不存在',
        execute_error: '公式执行错误: '
    },
    editor: {
        placeholder: '在此输入公式',
        debug: '调试',
        search_var: '搜索变量',
        search_fun: '搜索函数/API',
        empty: '暂无数据',
        tips: '小提示',
        tip1: '指向右侧函数时可在此处显示使用说明',
        tip2: '点击右侧函数可将其插入公式编辑器光标所在位置',
        tip3: '公式编辑器中输入任何字符会显示可用变量/函数列表',
        tip4: '公式编辑器中输入 <b>{entrance}</b> 会显示分类可用列表',
    },
    debug: {
        run: '运行',
        result: '结果',
        formula_error: '请先修正公式错误后再运行'
    },
    fun_lib: {
        inner: '内置',
        cate_common: '常用',
        cate_calc: '计算',
        cate_txt: '文本',
        cate_time: '时间',
        cate_api: '接口',
        sum_label: '求和',
        sum_note: `获取一组数值的总和。<br/>
        用法：<span style='color: #529b2e'>SUM(数字1,数字2,...)</span>`,
        now_label: '当前时间',
        now_note: `返回当前时间戳`,
        concat_label: '合并文本',
        concat_note: `将多个文本合并成一个文本。<br/>
        用法：<span style='color: #529b2e'>concat(文本1,文本2,...)</span>`,
        lower_label: '转成小写',
        lower_note: `将一个文本中的所有大写字母转换为小写字母。<br/>
        用法：<span style='color: #529b2e'>lower(文本)</span>`,
        upper_label: '转成大写',
        upper_note: `将一个文本中的所有小写字母转换为大写字母。<br/>
        用法：<span style='color: #529b2e'>upper(文本)</span>`,
        httpGet_label: 'HTTP Get请求',
        httpGet_note: `发起HTTP Get请求，返回Json格式。<br/>
        用法：<span style='color: #529b2e'>httpGet(https://httpbin.org/get)</span>`,
        httpGet_input1: '请求地址',
    }
}
