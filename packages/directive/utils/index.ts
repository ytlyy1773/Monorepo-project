/**
 * 限制只输入小数
 * @param {any} val 限制内容
 * @param {Object} option 配置
 * @param {boolean} option.limitZero 限制0开头
 * @returns 过滤后的数字
 */
export function inputNumber(
    val: any,
    option: { limitZero?: boolean } = {}
): string | number | null {
    const options = {
        limitZero: false,
        typeof: typeof val,
        ...option
    }
    // 处理数据为非[string | number]返回
    if (val == null || !['number', 'string'].includes(typeof val)) {
        return val
    }
    let value: string | null = String(val).replace(/[^\d]/gi, '')
    // 限制 >>> 1.启始字符最多一个0 >>> 2.非0123合理数字格式
    if (value.startsWith('00') || (value.startsWith('0') && value.length >= 2)) {
        value = Number(value).toString()
    }
    if (options.limitZero && value.startsWith('0')) {
        value = options.typeof === 'number' ? null : ''
    }
    // 处理缺陷 >>> 还原数据本来的类型
    return options.typeof === 'number' ? Number(value) : value
}

/**
* 限制输入为数字或小数
* @param {string | number} val - 要处理的值，可以是数字或字符串。
* @param {Object} option - 配置对象，包含处理限制。
* @param {number} [option.digit=2] - 限制小数点后的位数，默认为2位。
* @param {number} [option.maxValue=null] - 限制数字的最大值，默认无限制。
* @returns {string | number} 处理后的结果，根据输入类型返回对应类型的结果
*
* @example @input="from.count = decimal(from.count, { maxValue: 100 })"
*/
export function decimal(
    val: string | number,
    option: { digit?: number; maxValue?: number } = {}
): string | number {
    // 处理数据为非[string | number]返回
    if (val == null || !['number', 'string'].includes(typeof val)) {
        return val
    }
    const options = {
        digit: 2,
        maxValue: null,
        typeof: typeof val,
        ...option
    }
    let value: string = String(val)
        .replace(/[^\d.]/gi, '')
        .replace(/(\.\d*)\./g, '$1')
    if (value.startsWith('.')) {
        value = ''
    }
    if (
        value.startsWith('00') ||
        (value.startsWith('0') && value.length >= 2 && !value.endsWith('.'))
    ) {
        value = Number(value).toString()
    }
    if (value.includes('.')) {
        const list = value.split('.')
        const filterText = list[1].substring(0, options.digit!)
        value = `${list[0]}.${filterText}`
    }
    if (options.maxValue !== null) {
        if (!isNaN(Number(options.maxValue)) && Number(value) > options.maxValue) {
            value = options.maxValue.toString()
        }
        if (value.endsWith('.') && Number(removeEndSymbol(value)) === options.maxValue) {
            value = options.maxValue.toString()
        }
    }
    return options.typeof === 'number' ? Number(value) : value
}

/**
* 移除数字或字符串末尾的小数点。
* @param {*} val - 要处理的值，可以是数字或字符串。
* @returns {string | number} 处理后的结果，根据输入类型返回对应类型的结果
*
* @example @blur="from.count = removeEndSymbol(from.count)"
*/
export function removeEndSymbol(val: string | number): string | number {
    if (val == null) {
        return val
    }
    let value: string = String(val)
    if (value.endsWith('.')) {
        value = value.substring(0, value.length - 1)
    }
    return typeof val === 'number' ? Number(value) : value
}

/**
* 检查一个对象是否为空（不包含任何自身属性）。
* @param {Object} obj - 要检查的对象。
* @returns {boolean} - 如果对象为空，则返回 true，否则返回 false。
*/
export function objectIsEmptyKey(obj: object): boolean {
    if (String(obj) !== '[object Object]') {
        return false
    }
    return Reflect.ownKeys(obj).length === 0
}

/**
* 检查一个数组是否为非空数组。
* @param {Array} list - 要检查的数组。
* @returns {boolean} - 如果数组为非空，则返回 true，否则返回 false。
*/
export function arrayEmptyLength(list: any[]): boolean {
    return Array.isArray(list) && list.length > 0
}
