# MJWSD06MMC 刷机页（带断线续传）

小米温湿度计 3 mini（MJWSD06MMC / MJ6）自定义固件刷机页。

## 改动
- OTA 写入改用 **write-without-response**（固件特征支持 CHAR_PROP_WRITE_WITHOUT_RSP），失败自动回退到带确认写
- 连接重试 5 次 → **12 次 + 递增退避**（150~1500 ms）
- **断线自动续传**：记录最后成功块，重连后从断点继续（最多 6 次）

## 文件
| 文件 | 说明 |
|---|---|
| `index.html` | 刷机页（TelinkMiFlasher v14.1 + 上述改动 + Hide Date 勾选框） |
| `MJ6_v59_clock.bin` | 自定义固件 v21（85572 B, md5 A69A3C44…） |
| `MJ6_v59_official.bin` | 官方原版，救砖用（81076 B, md5 E0AE3F43…） |
| `core.js` / `styles.css` | 页面依赖 |

## 用法
Chrome / Edge 打开本页 → Connect → 选 Custom Firmware → Start Flashing。
中途断线留在页面别关，会自动重连续传。
