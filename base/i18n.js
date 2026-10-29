/**
 * MJ6 中文层 —— 完整词条表
 * 策略：按词条长度降序替换，避免短词先命中导致长词残留。
 * 只翻译 UI 文案，不翻译设备型号（LYWSD03MMC / CGDK1 / MHO-C401 等）。
 */
(function () {
  'use strict';

  /* ---- 基础术语（会被组合进长句） ---- */
  const TERMS = {
    // 主操作
    'Connect': '连接',
    'Disconnect': '断开',
    'Reconnect': '重连',
    'Start Flashing': '开始刷写',
    'Choose File': '选择文件',
    'Select Firmware:': '选择固件：',
    'Clear Log': '清空日志',
    'Load firmware file': '载入固件文件',
    'Get Config': '读取配置',
    'Send Config': '下发配置',
    'Factory Reset': '恢复出厂',
    'Get': '读取',
    'Set': '设置',
    'Send': '发送',
    'Test:': '测试：',
    'Info': '信息',
    'Help': '帮助',
    'Login': '登录',
    'Do Activation': '执行激活',
    'Enabled': '已启用',
    'Disabled': '已禁用',
    'All': '全部',
    'Custom': '自定义',
    'Happy': '开心',
    'Sad': '难过',
    'Blinking': '眨眼',
    'Counter': '计数器',
    'Line': '直线',

    // 区块标题
    'Configuration:': '设备配置：',
    'Comfort parameters:': '舒适区间参数：',
    'Chip Functions:': '芯片功能：',
    'Functions:': '功能：',
    'Keys and Codes:': '密钥与配对码：',
    'Debug:': '调试：',
    'Custom Firmware:': '自定义固件：',
    'Beta Firmware:': '测试版固件：',
    'Show on device screen:': '在设备屏幕显示：',

    // 配置项
    'Temperature:': '温度单位：',
    'Temperature Lo:': '温度下限：',
    'Temperature offset:': '温度偏移：',
    'Humidity Lo:': '湿度下限：',
    'Humidity offset:': '湿度偏移：',
    'Humidity threshold:': '湿度阈值：',
    'Humidity hysteresis:': '湿度回差：',
    'Humidity Slope factor:': '湿度斜率系数：',
    'Screen Off': '关闭屏幕',
    'Smiley': '表情',
    'Comfort Indicator': '舒适度指示',
    'Measure interval:': '测量间隔：',
    'Advertising interval:': '广播间隔：',
    'Connect latency:': '连接延迟：',
    'Advertising type:': '广播类型：',
    'Date DD/MM:': '日期格式 日/月：',
    'Show WeekDay:': '显示星期：',
    'Show battery:': '显示电量：',
    '12-hour clock:': '12 小时制：',
    'Set Time': '设置时间',
    'Device MAC': '设备 MAC',
    'Device known id:': '设备已知 ID：',
    'Device Date:': '设备日期：',
    'Mi Bind Key:': '米家绑定密钥：',
    'BindKey:': '绑定密钥：',
    'EEP BindKey:': 'EEP 绑定密钥：',
    'DevName:': '设备名：',
    'DevPeriod:': '设备周期：',
    'Event:': '事件：',
    'Level:': '级别：',
    'Interval:': '间隔：',
    'Altitude:': '海拔：',
    'Byte1:': '字节 1：',
    'MTimer:': '主定时器：',
    'Last clock setting:': '上次对时：',
    'File size:': '文件大小：',
    'File:': '文件：',
    'Count:': '数量：',
    'ADCh:': 'ADC 通道：',
    'APP Release:': 'APP 版本：',
    'Initial Period:': '初始周期：',
    'Device StepTimeSec:': '设备步长秒数：',
    'Memo end:': '记录结束：',
    'Automatic Self Calibration:': '自动自校准：',
    'Forced Recalibration:': '强制重新校准：',
    'Invert RS event:': '反转干簧管事件：',
    'Invert RS1 event:': '反转干簧管 1 事件：',
    'Invert RS2 event:': '反转干簧管 2 事件：',
    'Encrypted beacon:': '加密广播：',
    'Tx measures:': '发送测量值：',
    'Clock:': '时钟：',
    'Comfort:': '舒适度：',
    'AdFlags:': '广播标志：',
    'Blinking:': '眨眼：',
    'Number of duplicates when transmitting events beacons:': '事件广播重复次数：',
    'Config Moisture Sensor - K:': '土壤湿度传感器 - K：',
    'Adjust time clock delta:': '走时校准微调：',
    'Calk delta time': '计算时间偏差',
    'Get delta time': '读取时间偏差',
    'Get current comfort parameters': '读取当前舒适参数',
    'Manufacturer Name': '制造商',
    'Model Number': '型号',
    'Serial Number': '序列号',
    'Hardware Revision String:': '硬件版本：',
    'Software Revision String:': '软件版本：',
    'Firmware Revision String:': '固件版本：',
    'BT5+ PHY:': '蓝牙 5 物理层：',
    'LE Long Range (only for BT5.0+ adapters!)': '长距离模式（仅支持蓝牙 5.0+ 适配器）',
    'Humi 0% offset': '湿度 0% 偏移',
    'Humi 5% instant alarm': '湿度 5% 立即报警',
    'Get the last 50 records': '读取最近 50 条记录',
    'Show all mi keys': '显示全部米家密钥',
    'Get MiClock': '读取米家时钟',
    'Get BindKey': '读取绑定密钥',
    'Get MiClock:': '读取米家时钟：',
    'Get OldData': '读取历史数据',
    'Get DevTime...': '读取设备时间…',
    'Get Time': '读取时间',
    'Get MAC': '读取 MAC',
    'Get StepTimeSec...': '读取步长秒数…',
    'Get device Name': '读取设备名',
    'Get TRG': '读取触发配置',
    'Get TrSc parameters...': '读取参数…',
    'Get Sensor Settings': '读取传感器设置',
    'Get Sensor2 Settings': '读取传感器 2 设置',
    'Get Sensor SCD41 Settings': '读取 SCD41 设置',
    'Get binkey from EEP...': '从 EEP 读取绑定密钥…',
    'Manage GPIO_RS (Reed Switch):': '管理 GPIO_RS（干簧管）：',
    'Manage GPIO_TRG (mark "reset"):': '管理 GPIO_TRG（标记 reset）：',
    'Manage GPIO_TRG:': '管理 GPIO_TRG：',
    'Get Advertising MAC': '读取广播 MAC',
    'Get Advertising MAC (Web Experimental Features!)': '读取广播 MAC（实验功能）',
    'BLE device name prefix filter(s)': '蓝牙设备名前缀过滤',
    'Advertising interval: ms, step: 62.5 ms': '广播间隔（毫秒），步进 62.5 ms',
    'Connect latency: ms, step 20 ms': '连接延迟（毫秒），步进 20 ms',
    'Measure interval: x(Advertising interval)': '测量间隔 = 广播间隔 × 倍数',
    'Interval: sec,': '间隔（秒），',
    'Get the last 50 records GraphMemo.html': '读取最近 50 条记录',

    // 状态与日志
    'Status:': '状态：',
    'Searching for devices': '正在搜索设备',
    'Connecting to:': '正在连接：',
    'Connected.': '已连接',
    'Connected': '已连接',
    'Disconnected.': '已断开',
    'Disconnected': '已断开',
    'waiting for you to connect a device': '等待连接设备',
    'waiting for data after connecting': '连接后等待数据',
    'Temp/Humidity:': '温度/湿度：',
    'Start DFU': '开始刷写',
    'Update error:': '刷写错误：',
    'Success': '成功',
    'Timeout': '超时',
    'CRC error in data': '数据 CRC 错误',
    'Lost one or more packets': '数据包丢失',
    'Lost last one or more packets': '尾部数据包丢失',
    'Writing data to flash': '写入 Flash 失败',
    'Firmware CRC check': '固件 CRC 校验失败',
    'No file selected aborting': '未选择文件，已取消',
    'too many reconnects': '重连次数过多',
    'Reconnect': '重连',
    'from': '共',
    'Something went wrong': '发生错误',
    'Please do the Activation first!': '请先完成激活！',
    'Not found Telink OTA service!': '未找到 Telink OTA 服务！',
    'Detected Mi device': '检测到米家设备',
    'Detected Mi device, no Telink OTA service': '检测到米家设备，但没有 Telink OTA 服务',
    'Detected custom Firmware': '检测到自定义固件',
    'Detected ZBdevice': '检测到 Zigbee 设备',
    'Detected THBdevice': '检测到 THB 设备',
    'Detected Test device': '检测到测试设备',
    'Detected Qingping CGDK2 device': '检测到青萍 CGDK2',
    'Detected Qingping CGG1 device': '检测到青萍 CGG1',
    'Detected Qingping CGPR1 device': '检测到青萍 CGPR1',
    'Detected alternative Firmware?': '检测到其他固件？',
    'Activating now, please wait...': '正在激活，请稍候…',
    'Add signature file.': '添加签名文件。',
    'Invalid signature file!': '签名文件无效！',
    'Bind Key must be 32 hex characters (16 bytes)!': '绑定密钥必须是 32 位十六进制（16 字节）！',
    'BindKey must be 32 hex characters (16 bytes)!': '绑定密钥必须是 32 位十六进制（16 字节）！',
    'Mi Bind Key must be 32 hex characters (16 bytes)!': '米家绑定密钥必须是 32 位十六进制（16 字节）！',
    'Calibration ok': '校准成功',
    'Calibration error!': '校准失败！',
    'Command error!': '命令错误！',
    'Command': '命令',
    'Clear - ok (Mode Qingping)': '已清除（青萍模式）',
    'Clear all settings and reset device (into Qingping mode)': '清除全部设置并重置（进入青萍模式）',
    '!Delete all records!': '！删除全部记录！',
    '!Erase all Mi Keys!': '！擦除全部米家密钥！',
    'Delta time -32767 to 32767!': '时间偏差范围 -32767 ~ 32767！',
    'Error Registered!': '注册失败！',
    'Login successful': '登录成功',
    'Login Failed!': '登录失败！',
    'Login invalid LMTK!': '登录失败：LMTK 无效！',
    'Registration successful': '注册成功',
    'Registration failed!': '注册失败！',
    'Registration verify successful': '注册校验成功',
    'Registration verify failed!': '注册校验失败！',
    'Not registered!': '未注册！',
    'Error on sending setting': '下发设置失败',
    'Error read bindkey from EEP!': '从 EEP 读取绑定密钥失败！',
    'Error: Invalid OOB!': '错误：OOB 无效！',
    'Invalid OOB!': 'OOB 无效！',
    'Error: It looks like you swapped the Token and Bind Key!': '错误：Token 和绑定密钥可能填反了！',
    'Found new version of SW:': '发现新版软件：',
    'Found old version of SW:': '发现旧版软件：',
    'Get Sensor Settings Error:': '读取传感器设置失败：',
    'Get Sensor2 Settings Error:': '读取传感器 2 设置失败：',
    'Get Sensor SCD41 Settings Error:': '读取 SCD41 设置失败：',
    'Get run status SCD41 - ok': '读取 SCD41 状态成功',
    'Error get run status SCD41:': '读取 SCD41 状态失败：',
    'Calk delta time': '计算时间偏差',
    'Forced Recalibration:': '强制重新校准：',
    'Show clock': '显示时钟',
    'Custom config HEX string: 55': '配置 HEX（0x55）：',
    'Custom config HEX string: 57': '配置 HEX（0x57）：',
    'Custom (0x1f1f) Notifications id: 0x': '自定义通知（0x1f1f）ID：0x',
    'CustNotify018:': '自定义通知 0x18：',
    // ---- 补充词条（第三批）----
    'Management GPIO_RS (Reed Switch):': '管理 GPIO_RS（干簧管）：',
    'Management GPIO_TRG (mark "reset"):': '管理 GPIO_TRG（标记为 reset）：',
    'Management GPIO_TRG:': '管理 GPIO_TRG：',
    'Mi Like': '米家风格',
    'Reed Switch': '干簧管',
    'Detected': '检测到',
    'Atc1441 TelinkOTA': 'ATC1441 TelinkOTA',
    'Device MAC [+ 2 Rand]:': '设备 MAC（含 2 位随机）：',
    'Device known id:': '设备已知 ID：',
    'Mi Bind Key:': '米家绑定密钥：',
    'Get BindKey': '读取绑定密钥',
    'Show all mi keys': '显示全部米家密钥',
    'EEP BindKey': 'EEP 绑定密钥',
    'BindKey': '绑定密钥',
    'Bind Key': '绑定密钥',
    'Keys and Codes': '密钥与配对码',
    'Manage': '管理',
    'RxTx': '收发',
    'Advertisement': '广播',
    'Not supported': '不支持',
    'Unsupported': '不支持',
    'Failed': '失败',
    'Error': '错误',
    'Warning': '警告',
    'Done': '完成',
    'Waiting': '等待中',
    'Connecting': '正在连接',
    'Disconnecting': '正在断开',
    'Scanning': '正在扫描',
    'Uploading': '正在上传',
    'Downloading': '正在下载',
    'Flashing': '正在刷写',
    'Verifying': '正在校验',
    'Complete': '完成',
    'Aborted': '已中止',
    'Cancelled': '已取消',
    'Unknown': '未知',
    'None': '无',
    'Auto': '自动',
    'Manual': '手动',
    'Enable': '启用',
    'Disable': '禁用',
    'On': '开',
    'Off': '关',
    'High': '高',
    'Low': '低',
    'Min': '最小',
    'Max': '最大',
    'Default settings': '默认设置',
    'Restore': '恢复',
    'Backup': '备份',
    'Clear': '清除',
    'Erase all': '全部擦除',
    'Delete': '删除',
    'Add': '添加',
    'Remove': '移除',
    'Edit': '编辑',
    'Refresh': '刷新',
    'Update': '更新',
    'Upgrade': '升级',
    'Download': '下载',
    'Upload': '上传',
    // ---- 补充词条（第四批：组合词补漏）----
    'THBdevice': 'THB 设备',
    'ZBdevice': 'Zigbee 设备',
    'x(Advertising interval)': '× 广播间隔',
    'Advertising interval': '广播间隔',
    ' Hi:': ' 上限：',
    ' Lo:': ' 下限：',
    'Smiley:': '表情：',
    'Temperature Lo:': '温度下限：',
    'Humidity Lo:': '湿度下限：',
    'Measure interval': '测量间隔',
    'Detected alternative Firmware?': '检测到其他固件？',
    'TelinkOTA': 'TelinkOTA',
    'Command 1 - ok': '命令 1 成功',
    // ---- 补充词条（第二批）----
    '12-hour clock: T&H 2 decimal places': '12 小时制 + 温湿度两位小数',
    'ATC1441 firmware:': 'ATC1441 固件：',
    'Advertising': '广播',
    'Battery %': '电量百分比',
    'Battery V': '电池电压',
    'Battery:': '电量：',
    'Dev Point': '开发要点',
    'Device MAC [+ 2 Rand]:': '设备 MAC（含 2 位随机）：',
    'Flasher': '刷机',
    'Get EEP BindKey': '读取 EEP 绑定密钥',
    'Get Sensor SCD41 Settings': '读取 SCD41 设置',
    'Get Sensor SCD41 Settings Error:': '读取 SCD41 设置失败：',
    'Get Sensor SCD41 Settings...': '正在读取 SCD41 设置…',
    'Get run status SCD41 - ok': '读取 SCD41 状态成功',
    'Error get run status SCD41:': '读取 SCD41 状态失败：',
    'Graph Atc 1': 'ATC 图表 1',
    'Graph Atc 2': 'ATC 图表 2',
    'Graph Atc 3': 'ATC 图表 3',
    'GraphMemo.html': '历史图表',
    'Humidity': '湿度',
    'Temperature': '温度',
    'Humidity offset: %': '湿度偏移（%）：',
    'Humidity threshold: %': '湿度阈值（%）：',
    'Humidity hysteresis: %': '湿度回差（%）：',
    'Detected THBdevice': '检测到 THB 设备',
    'Detected ZBdevice': '检测到 Zigbee 设备',
    'Detected alternative Firmware?': '检测到其他固件？',
    'Detected custom Firmware': '检测到自定义固件',
    'Detected Test device': '检测到测试设备',
    'GraphMemo.html Set Time Get the last 50 records': '历史图表 · 设置时间 · 读取最近 50 条记录',
    'LYWSD03MMC Memo Graph': 'LYWSD03MMC 历史图表',
    'Memo Graph': '历史图表',
    'Load firmware file': '载入固件文件',
    'File size:': '文件大小：',
    'Chrome': 'Chrome',
    'Get the last 50 records': '读取最近 50 条记录',
    'Show WeekDay:': '显示星期：',
    'Show clock': '显示时钟',
    'Ready': '就绪',
    'Working...': '处理中…',
    'Reading...': '读取中…',
    'Writing...': '写入中…',
    'Verify': '校验',
    'Cancel': '取消',
    'OK': '确定',
    'Close': '关闭',
    'Apply': '应用',
    'Save': '保存',
    'Load': '载入',
    'Yes': '是',
    'No': '否',
    'Reboot': '重启设备',
    'Reset': '重置',
    'Erase': '擦除',
    'Read': '读取',
    'Write': '写入',
    'Mode': '模式',
    'Type': '类型',
    'Value': '值',
    'Default': '默认',
    'Current': '当前',
    'Version': '版本',
    'Device': '设备',
    'Sensor': '传感器',
    'Settings': '设置',
    'Parameters': '参数',
    'Calibration': '校准',
    'Measurement': '测量',
    'Beacon': '广播包',
    'Bind Key': '绑定密钥',
    'Token': '令牌',
    'PIN code': 'PIN 码',
    'Pincode': 'PIN 码',
    'Serial': '序列号',
    'Manufacturer': '制造商',
    'Model': '型号',
    'Firmware': '固件',
    'Hardware': '硬件',
    'Software': '软件',
  };

  /* 词条按长度降序，先替换长句 */
  const PAIRS = Object.keys(TERMS)
    .sort((a, b) => b.length - a.length)
    .map(k => [k, TERMS[k]]);

  function translate(txt) {
    if (!txt || typeof txt !== 'string') return txt;
    let out = txt;
    for (let i = 0; i < PAIRS.length; i++) {
      const [en, zh] = PAIRS[i];
      if (out.indexOf(en) !== -1) out = out.split(en).join(zh);
    }
    return out;
  }

  /* 只处理文本节点，不碰脚本/样式/输入值 */
  function walk(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        const tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA' || tag === 'OPTION') {
          // <option> 需要翻译（下拉项），但 SCRIPT/STYLE 跳过
          if (tag !== 'OPTION') return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const list = [];
    while (walker.nextNode()) list.push(walker.currentNode);
    for (let i = 0; i < list.length; i++) {
      const n = list[i];
      const zh = translate(n.nodeValue);
      if (zh !== n.nodeValue) n.nodeValue = zh;
    }
    if (root.querySelectorAll) {
      root.querySelectorAll('[title]').forEach(function (el) {
        const t = el.getAttribute('title');
        if (t && /[a-zA-Z]{3}/.test(t)) el.setAttribute('title', translate(t));
      });
      root.querySelectorAll('[placeholder]').forEach(function (el) {
        const t = el.getAttribute('placeholder');
        if (t && /[a-zA-Z]{3}/.test(t)) el.setAttribute('placeholder', translate(t));
      });
    }
  }

  /* 让运行中新产生的日志也走词典 */
  function hookOutput() {
    ['addLog', 'addAlog'].forEach(function (fn) {
      const orig = window[fn];
      if (typeof orig !== 'function' || orig.__zh) return;
      const wrapped = function (t) { return orig.call(this, typeof t === 'string' ? translate(t) : t); };
      wrapped.__zh = true;
      window[fn] = wrapped;
    });
    const st = window.setStatus;
    if (typeof st === 'function' && !st.__zh) {
      const wrapped = function (t) { return st.call(this, typeof t === 'string' ? translate(t) : t); };
      wrapped.__zh = true;
      window.setStatus = wrapped;
    }
  }

  let pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () {
      pending = false;
      walk(document.body);
    });
  }

  function start() {
    hookOutput();
    walk(document.body);
    new MutationObserver(function (muts) {
      for (let i = 0; i < muts.length; i++) {
        if (muts[i].type === 'childList') { schedule(); return; }
      }
    }).observe(document.body, { childList: true, subtree: true });
    /* 配置区是点击「Get Config」后才生成的，补几次兜底 */
    [200, 600, 1200, 2500, 5000].forEach(function (t) { setTimeout(function () { walk(document.body); }, t); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
