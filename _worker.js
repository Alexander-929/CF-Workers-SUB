
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'api/v1/client/subscribe?token=api/v1/client/subscribe?token=87fd1239fa2282b2a01661ba42e28a87';
let guestToken = ''; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken = ''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID = ''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
ss://Y2hhY2hhMjAtaWV0Zjphc2QxMjM0NTY=@103.149.182.191:8388#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zjphc2QxMjM0NTY=@103.149.183.61:8388#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zjphc2QxMjM0NTY=@103.36.90.195:8388#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zjphc2QxMjM0NTY=@202.162.109.169:8388#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@47.129.168.96:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@13.250.31.115:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@13.215.49.89:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@13.229.55.109:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@47.129.7.198:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@13.229.63.223:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@13.250.96.5:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@3.112.1.95:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@54.64.6.209:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@54.249.42.175:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@13.230.186.166:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zjphc2QxMjM0NTY=@107.148.6.121:8388#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@54.248.148.112:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@47.129.48.255:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@18.181.198.147:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206VjRSMFhNN0dNRVpGOVFBNQ==@156.231.104.22:18012#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206SDBQODg5Q1gwN0VRTkdOVg==@156.231.104.15:18005#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@54.64.124.92:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@54.151.184.124:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@18.140.3.253:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@54.255.230.67:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@18.142.183.235:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@18.143.186.182:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@54.255.224.231:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6OWQ2Y2NlYWEzNzNiZjJjOGFjYjIyZTYwYjZhNThiZTY=@45.79.111.214:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zjphc2QxMjM0NTY=@137.175.113.193:8388#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp4TFNsSUJLd1hGdmZDY1IyaEFWakNi@87.251.79.34:20684#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206WEtGS2wyclVMaklwNzQ=@38.114.114.19:8008#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvX0E3aW5OMXlxZVd0T1RM@104.207.155.64:1633#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206Rm9PaUdsa0FBOXlQRUdQ@38.114.114.19:7307#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206ekROVmVkUkZQUWV4Rzl2@38.114.114.19:6379#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@38.114.114.19:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206VEV6amZBWXEySWp0dW9T@38.114.114.19:6697#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206a0RXdlhZWm9UQmNHa0M0@38.114.114.19:8882#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206Rm9PaUdsa0FBOXlQRUdQ@38.114.114.19:7306#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206ZzVNZUQ2RnQzQ1dsSklk@38.114.114.19:5003#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206WTZSOXBBdHZ4eHptR0M=@38.114.114.19:5601#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@38.114.114.67:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206S2l4THZLendqZWtHMDBybQ==@38.114.114.19:5500#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206UmV4bkJnVTdFVjVBRHhH@38.114.114.19:7002#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206ZmFCQW9ENTRrODdVSkc3@38.114.114.19:2376#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206VEV6amZBWXEySWp0dW9T@38.114.114.19:6679#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206UENubkg2U1FTbmZvUzI3@38.114.114.19:8090#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206WEtGS2wyclVMaklwNzQ=@38.114.114.19:8009#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpjdklJODVUclc2bjBPR3lmcEhWUzF1@45.87.175.154:8080#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvWEdwMStpaGxmS2c4MjZI@172.233.128.126:1866#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@54.190.1.125:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0S3NMQXN3TE1xMUMwTDhJY1h0cGR2@212.18.104.228:17889#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206UENubkg2U1FTbmZvUzI3@38.114.114.19:8091#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zjphc2QxMjM0NTY=@137.175.113.215:8388#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206WTZSOXBBdHZ4eHptR0M=@38.114.114.19:3389#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@54.244.204.173:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTEyOC1nY206c2hhZG93c29ja3M=@149.34.244.71:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@51.15.23.63:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTEyOC1nY206c2hhZG93c29ja3M=@212.102.53.196:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3SjQ0RHA1TnV4TDJzUEpuN25pZkJW@51.158.252.130:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@34.211.97.239:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@158.247.205.87:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@54.180.133.38:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpXNzRYRkFMTEx1dzZtNUlB@74.177.200.147:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvWklvQTY5UTh5aGNRVjhrYTNQYTNB@103.104.247.49:8080#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@188.214.36.155:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpXMm50SWFJanlvaDZiVkZsWHZRcllz@80.242.56.218:50042#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNToxUld3WGh3ZkFCNWdBRW96VTRHMlBn@45.87.175.178:8080#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvWEdwMStpaGxmS2c4MjZI@172.232.171.192:1866#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@84.17.53.160:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpjdklJODVUclc2bjBPR3lmcEhWUzF1@45.87.175.188:8080#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@91.132.94.200:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTEyOC1jZmI6c2hhZG93c29ja3M=@156.146.62.160:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@142.202.48.58:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://cmM0LW1kNToxNGZGUHJiZXpFM0hEWnpzTU9yNg==@194.5.215.59:8080#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNToya1pNWk5vSTJzZ0tQYjZDLTlJUTh3@109.104.154.4:5555#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@176.103.53.105:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@167.88.63.79:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@195.154.200.150:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206QU4zRlRBVjY1WFY5QlFLRw==@156.245.190.18:15009#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTphODFkZDQxNi1kNmRjLTQyNjgtYjA4OC01N2NhMDQ0N2I0NDg=@191.96.206.4:51183#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@167.88.63.71:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206S2l4THZLendqZWtHMDBybQ==@142.202.48.52:8080#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvWEdwMStpaGxmS2c4MjZI@64.176.85.73:1866#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206UFQyTjYwRENVSDZWQ1FQQw==@156.245.190.13:15004#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@185.237.185.160:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206TE44NTVCQUNNWldDMUNSNw==@156.245.190.21:15012#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YXNkS2thc2tKS2Zuc2E=@162.19.59.160:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@54.185.211.74:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOGY3YUN6Y1BLYnNGOHAz@154.90.63.193:990#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@185.231.233.173:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206WTZSOXBBdHZ4eHptR0M=@38.107.226.49:3306#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ck5CZk51dUFORkNBazdLQg==@217.30.10.18:9056#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpSQ2NEMWNjZU5Lb2ZHYlVVdUJDWUJq@45.12.133.203:15357#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@52.78.98.113:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6WFB0ekE5c0N1ZzNTUFI0Yw==@217.30.10.18:9025#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpsNndOVFNEV05EQXJRcmJkZWg3ZEJZ@86.104.74.203:32404#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo4ZmNmNjRjNC0yYWM1LTRmMmYtODI5OC01MDUyZDhjZmY4MjY=@204.10.194.114:8388#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6VE4yWXFnaHhlRkRLWmZMVQ==@217.30.10.18:9037#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@85.208.108.60:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZkcyYXJ0VW1IZk5UMmNYNw==@217.30.10.18:9018#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@154.90.62.168:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNToyMHpjOFY2VWkyWWY4SjlIREdZQ0hI@62.133.63.21:65262#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTEyOC1jZmI6c2hhZG93c29ja3M=@156.146.38.163:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@167.88.63.44:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6S25KR2FkM0ZxVHZqcWJhWA==@217.30.10.18:9014#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpwaXY5N1hTMUN2YWw4NnZmd0hQRDVq@194.87.216.121:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@185.186.79.53:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YXNkS2thc2tKS2Zuc2E=@162.19.59.163:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206MEhMS1dYVTJNVjVLR0VYNA==@156.245.190.22:15013#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvWEdwMStpaGxmS2c4MjZI@64.176.184.129:1866#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6cnBnYk5uVTlyRERVNGFXWg==@217.30.10.18:9094#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6WkVUNTlMRjZEdkNDOEtWdA==@217.30.10.18:9005#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6VTZxbllSaGZ5RG1uOHNnbg==@217.30.10.18:9041#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6QndjQVVaazhoVUZBa0RHTg==@217.30.10.18:9031#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YzNOdEhKNXVqVjJ0R0Rmag==@217.30.10.18:9084#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YXNkS2thc2tKS2Zuc2E=@162.19.59.162:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6R0E5S3plRWd2ZnhOcmdtTQ==@217.30.10.18:9019#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5NGR2b1cwVGRLUnE=@161.97.68.139:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6Y3A4cFJTVUF5TGhUZlZXSA==@217.30.10.18:9064#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6dWVMWFZrdmg0aGNraEVyUQ==@217.30.10.18:9060#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6QmVqclF2dHU5c3FVZU51Wg==@217.30.10.18:9024#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6OVh3WXlac0s4U056UUR0WQ==@217.30.10.18:9059#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206WTZSOXBBdHZ4eHptR0M=@38.68.134.85:3306#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206RFcxQjQ2UFRXUzNYU1BZVQ==@156.245.190.12:15003#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6cDl6NUJWQURIMllGczNNTg==@217.30.10.18:9040#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@38.68.134.85:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6RVhOM1MzZVFwakU3RUp1OA==@217.30.10.18:9027#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6Z1lDWVhma1VRRXMyVGFKUQ==@217.30.10.18:9038#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206WUtCNDJKR0tLOEg1RElXRg==@23.185.248.12:17002#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvWEdwMStpaGxmS2c4MjZI@185.177.229.245:1866#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6RkFkVXZNSlVxNXZEZ0tFcQ==@217.30.10.18:9006#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6UzdLd1V1N3lCeTU4UzNHYQ==@217.30.10.18:9042#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@213.156.137.67:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206ekROVmVkUkZQUWV4Rzl2@38.68.134.85:6379#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@185.47.252.251:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6d2ZMQzJ5N3J6WnlDbXV5dA==@217.30.10.18:9093#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTozTjJKb1poRG9kTVg1d1BmcjB4YlQ1@45.8.98.163:52839#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6TTN0MlpFUWNNR1JXQmpSYQ==@217.30.10.18:9011#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@103.106.229.219:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@37.143.129.230:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6SmRtUks5Z01FcUZnczhuUA==@217.30.10.18:9003#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhucEtnTnpka3NzMnl0bg==@217.30.10.18:9088#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@38.68.135.123:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo2NWFiZGIxYy0xY2RmLTQ2MzAtYTMyYi04YWU1NjZiNDhjMDA=@160.187.111.61:40011#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206a0RXdlhZWm9UQmNHa0M0@23.154.136.44:8881#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206WUpDSjBSNFdZMU5XRlUyWQ==@154.196.244.17:16007#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvWEdwMStpaGxmS2c4MjZI@204.136.10.115:1866#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3a0pRczJSWUhoVmlUWVdhZjFSb2JC@77.246.97.187:7749#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206VkQyWEJYMzVRSzZHMVdBMQ==@154.196.244.14:16004#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206RFEyQkJNVzFBUFNDVzhIRA==@154.196.244.11:16001#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206a0RXdlhZWm9UQmNHa0M0@38.114.121.218:8881#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206VEV6amZBWXEySWp0dW9T@23.166.88.104:6697#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206TDRKT1lVWlhGV0ZYOUUwTg==@154.196.244.15:16005#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206WUhLODJUUjczMTE0Vk45Tw==@154.196.244.26:16016#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206N1U0WTFXUUJIS0lNR0ZCUg==@156.231.104.16:18006#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@185.193.49.88:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206S2l4THZLendqZWtHMDBybQ==@38.143.66.55:8080#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6ZjhmN2FDemNQS2JzRjhwMw==@134.255.210.49:989#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1nY206OU5DV0RSVlU3VEE1WTNWUQ==@154.196.244.13:16003#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@52.195.185.114:443#%E6%9B%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E5%85%B3%E6%B3%A8TG%E9%A2%91%E9%81%93%EF%BC%9A@eziyuan
`

let urls = [];
let subConverter = "SUBAPI.cmliussss.net"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subConfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch(request, env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID;
		TG = env.TG || TG;
		subConverter = env.SUBAPI || subConverter;
		if (subConverter.includes("http://")) {
			subConverter = subConverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subConverter = subConverter.split("//")[1] || subConverter;
		}
		subConfig = env.SUBCONFIG || subConfig;
		FileName = env.SUBNAME || FileName;

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		guestToken = env.GUESTTOKEN || env.GUEST || guestToken;
		if (!guestToken) guestToken = await MD5MD5(mytoken);
		const 访客订阅 = guestToken;
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now()) / timestamp * total * 1099511627776) / 2);
		total = total * 1099511627776;
		let expire = Math.floor(timestamp / 1000);
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		if (!([mytoken, fakeToken, 访客订阅].includes(token) || url.pathname == ("/" + mytoken) || url.pathname.includes("/" + mytoken + "?"))) {
			if (TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			if (env.KV) {
				await 迁移地址列表(env, 'LINK.txt');
				if (userAgent.includes('mozilla') && !url.search) {
					await sendMessage(`#编辑订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
					return await KV(request, env, 'LINK.txt', 访客订阅);
				} else {
					MainData = await env.KV.get('LINK.txt') || MainData;
				}
			} else {
				MainData = env.LINK || MainData;
				if (env.LINKSUB) urls = await ADD(env.LINKSUB);
			}
			let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
			let 自建节点 = "";
			let 订阅链接 = "";
			for (let x of 重新汇总所有链接) {
				if (x.toLowerCase().startsWith('http')) {
					订阅链接 += x + '\n';
				} else {
					自建节点 += x + '\n';
				}
			}
			MainData = 自建节点;
			urls = await ADD(订阅链接);
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);

			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())) {
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || (url.searchParams.has('clash') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ((url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))) {
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || (url.searchParams.has('surge') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'surge';
			} else if (userAgent.includes('quantumult%20x') || (url.searchParams.has('quanx') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'quanx';
			} else if (userAgent.includes('loon') || (url.searchParams.has('loon') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'loon';
			}

			let subConverterUrl;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('b64') || url.searchParams.has('base64')) 订阅格式 = 'base64';
			else if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if (url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if (url.searchParams.has('surge')) 追加UA = 'surge';
			else if (url.searchParams.has('quanx')) 追加UA = 'Quantumult%20X';
			else if (url.searchParams.has('loon')) 追加UA = 'Loon';

			const 请求订阅响应内容 = await getSUB(urls, request, 追加UA, userAgentHeader);
			console.log(请求订阅响应内容);
			req_data += 请求订阅响应内容[0].join('\n');
			订阅转换URL += "|" + 请求订阅响应内容[1];

			if (env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			//const text = String.fromCharCode.apply(null, encodedData);
			const utf8Decoder = new TextDecoder();
			const text = utf8Decoder.decode(encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);

			let base64Data;
			try {
				base64Data = btoa(result);
			} catch (e) {
				function encodeBase64(data) {
					const binary = new TextEncoder().encode(data);
					let base64 = '';
					const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

					for (let i = 0; i < binary.length; i += 3) {
						const byte1 = binary[i];
						const byte2 = binary[i + 1] || 0;
						const byte3 = binary[i + 2] || 0;

						base64 += chars[byte1 >> 2];
						base64 += chars[((byte1 & 3) << 4) | (byte2 >> 4)];
						base64 += chars[((byte2 & 15) << 2) | (byte3 >> 6)];
						base64 += chars[byte3 & 63];
					}

					const padding = 3 - (binary.length % 3 || 3);
					return base64.slice(0, base64.length - padding) + '=='.slice(0, padding);
				}

				base64Data = encodeBase64(result.replace(/\u0026/g, '&'))
			}

			if (订阅格式 == 'base64' || token == fakeToken) {
				return new Response(base64Data, {
					headers: {
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=surge&ver=4&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'quanx') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=quanx&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&udp=true`;
			} else if (订阅格式 == 'loon') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=loon&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false`;
			}
			//console.log(订阅转换URL);
			try {
				const subConverterResponse = await fetch(subConverterUrl);

				if (!subConverterResponse.ok) {
					return new Response(base64Data, {
						headers: {
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subConverterUrl: ${subConverterResponse.status} ${subConverterResponse.statusText}`);
				}
				let subConverterContent = await subConverterResponse.text();
				if (订阅格式 == 'clash') subConverterContent = await clashFix(subConverterContent);
				return new Response(subConverterContent, {
					headers: {
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data, {
					headers: {
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');	// 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length - 1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text;
}

async function sendMessage(type, ip, add_data = "") {
	if (BotToken !== '' && ChatID !== '') {
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}

		let url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();

	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	return secondHex.toLowerCase();
}

function clashFix(content) {
	if (content.includes('wireguard') && !content.includes('remote-dns-resolve')) {
		let lines;
		if (content.includes('\r\n')) {
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}

		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, request, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	} else api = [...new Set(api)]; // 去重
	let newapi = "";
	let 订阅转换URLs = "";
	let 异常订阅 = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求
	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => getUrl(request, apiUrl, 追加UA, userAgentHeader).then(response => response.ok ? response.text() : Promise.reject(response))));

		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			if (response.status === 'rejected') {
				const reason = response.reason;
				if (reason && reason.name === 'AbortError') {
					return {
						status: '超时',
						value: null,
						apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
					};
				}
				console.error(`请求失败: ${api[index]}, 错误信息: ${reason.status} ${reason.statusText}`);
				return {
					status: '请求失败',
					value: null,
					apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
				};
			}
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});

		console.log(modifiedResponses); // 输出修改后的响应数组

		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies:')) {
					//console.log('Clash订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Clash 配置
				} else if (content.includes('outbounds"') && content.includes('inbounds"')) {
					//console.log('Singbox订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Singbox 配置
				} else if (content.includes('://')) {
					//console.log('明文订阅: ' + response.apiUrl);
					newapi += content + '\n'; // 追加内容
				} else if (isValidBase64(content)) {
					//console.log('Base64订阅: ' + response.apiUrl);
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				} else {
					const 异常订阅LINK = `trojan://CMLiussss@127.0.0.1:8888?security=tls&allowInsecure=1&type=tcp&headerType=none#%E5%BC%82%E5%B8%B8%E8%AE%A2%E9%98%85%20${response.apiUrl.split('://')[1].split('/')[0]}`;
					console.log('异常订阅: ' + 异常订阅LINK);
					异常订阅 += `${异常订阅LINK}\n`;
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}

	const 订阅内容 = await ADD(newapi + 异常订阅); // 将处理后的内容转换为数组
	// 返回处理后的结果
	return [订阅内容, 订阅转换URLs];
}

async function getUrl(request, targetUrl, 追加UA, userAgentHeader) {
	// 设置自定义 User-Agent
	const newHeaders = new Headers(request.headers);
	newHeaders.set("User-Agent", `${atob('djJyYXlOLzYuNDU=')} cmliu/CF-Workers-SUB ${追加UA}(${userAgentHeader})`);

	// 构建新的请求对象
	const modifiedRequest = new Request(targetUrl, {
		method: request.method,
		headers: newHeaders,
		body: request.method === "GET" ? null : request.body,
		redirect: "follow",
		cf: {
			// 忽略SSL证书验证
			insecureSkipVerify: true,
			// 允许自签名证书
			allowUntrusted: true,
			// 禁用证书验证
			validateCertificate: false
		}
	});

	// 输出请求的详细信息
	console.log(`请求URL: ${targetUrl}`);
	console.log(`请求头: ${JSON.stringify([...newHeaders])}`);
	console.log(`请求方法: ${request.method}`);
	console.log(`请求体: ${request.method === "GET" ? null : request.body}`);

	// 发送请求并返回响应
	return fetch(modifiedRequest);
}

function isValidBase64(str) {
	// 先移除所有空白字符(空格、换行、回车等)
	const cleanStr = str.replace(/\s/g, '');
	const base64Regex = /^[A-Za-z0-9+/=]+$/;
	return base64Regex.test(cleanStr);
}

async function 迁移地址列表(env, txt = 'ADD.txt') {
	const 旧数据 = await env.KV.get(`/${txt}`);
	const 新数据 = await env.KV.get(txt);

	if (旧数据 && !新数据) {
		// 写入新位置
		await env.KV.put(txt, 旧数据);
		// 删除旧数据
		await env.KV.delete(`/${txt}`);
		return true;
	}
	return false;
}

async function KV(request, env, txt = 'ADD.txt', guest) {
	const url = new URL(request.url);
	try {
		// POST请求处理
		if (request.method === "POST") {
			if (!env.KV) return new Response("未绑定KV空间", { status: 400 });
			try {
				const content = await request.text();
				await env.KV.put(txt, content);
				return new Response("保存成功");
			} catch (error) {
				console.error('保存KV时发生错误:', error);
				return new Response("保存失败: " + error.message, { status: 500 });
			}
		}

		// GET请求部分
		let content = '';
		let hasKV = !!env.KV;

		if (hasKV) {
			try {
				content = await env.KV.get(txt) || '';
			} catch (error) {
				console.error('读取KV时发生错误:', error);
				content = '读取数据时发生错误: ' + error.message;
			}
		}

		const html = `
			<!DOCTYPE html>
			<html>
				<head>
					<title>${FileName} 订阅编辑</title>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<style>
						body {
							margin: 0;
							padding: 15px; /* 调整padding */
							box-sizing: border-box;
							font-size: 13px; /* 设置全局字体大小 */
						}
						.editor-container {
							width: 100%;
							max-width: 100%;
							margin: 0 auto;
						}
						.editor {
							width: 100%;
							height: 300px; /* 调整高度 */
							margin: 15px 0; /* 调整margin */
							padding: 10px; /* 调整padding */
							box-sizing: border-box;
							border: 1px solid #ccc;
							border-radius: 4px;
							font-size: 13px;
							line-height: 1.5;
							overflow-y: auto;
							resize: none;
						}
						.save-container {
							margin-top: 8px; /* 调整margin */
							display: flex;
							align-items: center;
							gap: 10px; /* 调整gap */
						}
						.save-btn, .back-btn {
							padding: 6px 15px; /* 调整padding */
							color: white;
							border: none;
							border-radius: 4px;
							cursor: pointer;
						}
						.save-btn {
							background: #4CAF50;
						}
						.save-btn:hover {
							background: #45a049;
						}
						.back-btn {
							background: #666;
						}
						.back-btn:hover {
							background: #555;
						}
						.save-status {
							color: #666;
						}
					</style>
					<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
				</head>
				<body>
					################################################################<br>
					Subscribe / sub 订阅地址, 点击链接自动 <strong>复制订阅链接</strong> 并 <strong>生成订阅二维码</strong> <br>
					---------------------------------------------------------------<br>
					自适应订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sub','qrcode_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}</a><br>
					<div id="qrcode_0" style="margin: 10px 10px 10px 10px;"></div>
					Base64订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?b64</a><br>
					<div id="qrcode_1" style="margin: 10px 10px 10px 10px;"></div>
					clash订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?clash','qrcode_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?clash</a><br>
					<div id="qrcode_2" style="margin: 10px 10px 10px 10px;"></div>
					singbox订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sb','qrcode_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?sb</a><br>
					<div id="qrcode_3" style="margin: 10px 10px 10px 10px;"></div>
					surge订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?surge','qrcode_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?surge</a><br>
					<div id="qrcode_4" style="margin: 10px 10px 10px 10px;"></div>
					loon订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?loon','qrcode_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?loon</a><br>
					<div id="qrcode_5" style="margin: 10px 10px 10px 10px;"></div>
					&nbsp;&nbsp;<strong><a href="javascript:void(0);" id="noticeToggle" onclick="toggleNotice()">查看访客订阅∨</a></strong><br>
					<div id="noticeContent" class="notice-content" style="display: none;">
						---------------------------------------------------------------<br>
						访客订阅只能使用订阅功能，无法查看配置页！<br>
						GUEST（访客订阅TOKEN）: <strong>${guest}</strong><br>
						---------------------------------------------------------------<br>
						自适应订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}','guest_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}</a><br>
						<div id="guest_0" style="margin: 10px 10px 10px 10px;"></div>
						Base64订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&b64','guest_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&b64</a><br>
						<div id="guest_1" style="margin: 10px 10px 10px 10px;"></div>
						clash订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&clash','guest_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&clash</a><br>
						<div id="guest_2" style="margin: 10px 10px 10px 10px;"></div>
						singbox订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&sb','guest_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&sb</a><br>
						<div id="guest_3" style="margin: 10px 10px 10px 10px;"></div>
						surge订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&surge','guest_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&surge</a><br>
						<div id="guest_4" style="margin: 10px 10px 10px 10px;"></div>
						loon订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&loon','guest_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&loon</a><br>
						<div id="guest_5" style="margin: 10px 10px 10px 10px;"></div>
					</div>
					---------------------------------------------------------------<br>
					################################################################<br>
					订阅转换配置<br>
					---------------------------------------------------------------<br>
					SUBAPI（订阅转换后端）: <strong>${subProtocol}://${subConverter}</strong><br>
					SUBCONFIG（订阅转换配置文件）: <strong>${subConfig}</strong><br>
					---------------------------------------------------------------<br>
					################################################################<br>
					${FileName} 汇聚订阅编辑: 
					<div class="editor-container">
						${hasKV ? `
						<textarea class="editor" 
							placeholder="${decodeURIComponent(atob('TElOSyVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNCVCOCVBQSVFOCU4QSU4MiVFNyU4MiVCOSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQp2bGVzcyUzQSUyRiUyRjI0NmFhNzk1LTA2MzctNGY0Yy04ZjY0LTJjOGZiMjRjMWJhZCU0MDEyNy4wLjAuMSUzQTEyMzQlM0ZlbmNyeXB0aW9uJTNEbm9uZSUyNnNlY3VyaXR5JTNEdGxzJTI2c25pJTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2YWxsb3dJbnNlY3VyZSUzRDElMjZ0eXBlJTNEd3MlMjZob3N0JTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2cGF0aCUzRCUyNTJGJTI1M0ZlZCUyNTNEMjU2MCUyM0NGbmF0CnRyb2phbiUzQSUyRiUyRmFhNmRkZDJmLWQxY2YtNGE1Mi1iYTFiLTI2NDBjNDFhNzg1NiU0MDIxOC4xOTAuMjMwLjIwNyUzQTQxMjg4JTNGc2VjdXJpdHklM0R0bHMlMjZzbmklM0RoazEyLmJpbGliaWxpLmNvbSUyNmFsbG93SW5zZWN1cmUlM0QxJTI2dHlwZSUzRHRjcCUyNmhlYWRlclR5cGUlM0Rub25lJTIzSEsKc3MlM0ElMkYlMkZZMmhoWTJoaE1qQXRhV1YwWmkxd2IyeDVNVE13TlRveVJYUlFjVzQyU0ZscVZVNWpTRzlvVEdaVmNFWlJkMjVtYWtORFVUVnRhREZ0U21SRlRVTkNkV04xVjFvNVVERjFaR3RTUzBodVZuaDFielUxYXpGTFdIb3lSbTgyYW5KbmRERTRWelkyYjNCMGVURmxOR0p0TVdwNlprTm1RbUklMjUzRCU0MDg0LjE5LjMxLjYzJTNBNTA4NDElMjNERQoKCiVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNiU5RCVBMSVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQpodHRwcyUzQSUyRiUyRnN1Yi54Zi5mcmVlLmhyJTJGYXV0bw=='))}"
							id="content">${content}</textarea>
						<div class="save-container">
							<button class="save-btn" onclick="saveContent(this)">保存</button>
							<span class="save-status" id="saveStatus"></span>
						</div>
						` : '<p>请绑定 <strong>变量名称</strong> 为 <strong>KV</strong> 的KV命名空间</p>'}
					</div>
					<br>
					################################################################<br>
					${decodeURIComponent(atob('dGVsZWdyYW0lMjAlRTQlQkElQTQlRTYlQjUlODElRTclQkUlQTQlMjAlRTYlOEElODAlRTYlOUMlQUYlRTUlQTQlQTclRTQlQkQlQUMlN0UlRTUlOUMlQTglRTclQkElQkYlRTUlOEYlOTElRTclODklOEMhJTNDYnIlM0UKJTNDYSUyMGhyZWYlM0QlMjdodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlMjclM0VodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlM0MlMkZhJTNFJTNDYnIlM0UKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTNDYnIlM0UKZ2l0aHViJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU1JTlDJUIwJUU1JTlEJTgwJTIwU3RhciFTdGFyIVN0YXIhISElM0NiciUzRQolM0NhJTIwaHJlZiUzRCUyN2h0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmNtbGl1JTJGQ0YtV29ya2Vycy1TVUIlMjclM0VodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZjbWxpdSUyRkNGLVdvcmtlcnMtU1VCJTNDJTJGYSUzRSUzQ2JyJTNFCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUzQ2JyJTNFCiUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMw=='))}
					<br><br>UA: <strong>${request.headers.get('User-Agent')}</strong>
					<script>
					function copyToClipboard(text, qrcode) {
						navigator.clipboard.writeText(text).then(() => {
							alert('已复制到剪贴板');
						}).catch(err => {
							console.error('复制失败:', err);
						});
						const qrcodeDiv = document.getElementById(qrcode);
						qrcodeDiv.innerHTML = '';
						new QRCode(qrcodeDiv, {
							text: text,
							width: 220, // 调整宽度
							height: 220, // 调整高度
							colorDark: "#000000", // 二维码颜色
							colorLight: "#ffffff", // 背景颜色
							correctLevel: QRCode.CorrectLevel.Q, // 设置纠错级别
							scale: 1 // 调整像素颗粒度
						});
					}
						
					if (document.querySelector('.editor')) {
						let timer;
						const textarea = document.getElementById('content');
						const originalContent = textarea.value;
		
						function goBack() {
							const currentUrl = window.location.href;
							const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
							window.location.href = parentUrl;
						}
		
						function replaceFullwidthColon() {
							const text = textarea.value;
							textarea.value = text.replace(/：/g, ':');
						}
						
						function saveContent(button) {
							try {
								const updateButtonText = (step) => {
									button.textContent = \`保存中: \${step}\`;
								};
								// 检测是否为iOS设备
								const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
								
								// 仅在非iOS设备上执行replaceFullwidthColon
								if (!isIOS) {
									replaceFullwidthColon();
								}
								updateButtonText('开始保存');
								button.disabled = true;

								// 获取textarea内容和原始内容
								const textarea = document.getElementById('content');
								if (!textarea) {
									throw new Error('找不到文本编辑区域');
								}

								updateButtonText('获取内容');
								let newContent;
								let originalContent;
								try {
									newContent = textarea.value || '';
									originalContent = textarea.defaultValue || '';
								} catch (e) {
									console.error('获取内容错误:', e);
									throw new Error('无法获取编辑内容');
								}

								updateButtonText('准备状态更新函数');
								const updateStatus = (message, isError = false) => {
									const statusElem = document.getElementById('saveStatus');
									if (statusElem) {
										statusElem.textContent = message;
										statusElem.style.color = isError ? 'red' : '#666';
									}
								};

								updateButtonText('准备按钮重置函数');
								const resetButton = () => {
									button.textContent = '保存';
									button.disabled = false;
								};

								if (newContent !== originalContent) {
									updateButtonText('发送保存请求');
									fetch(window.location.href, {
										method: 'POST',
										body: newContent,
										headers: {
											'Content-Type': 'text/plain;charset=UTF-8'
										},
										cache: 'no-cache'
									})
									.then(response => {
										updateButtonText('检查响应状态');
										if (!response.ok) {
											throw new Error(\`HTTP error! status: \${response.status}\`);
										}
										updateButtonText('更新保存状态');
										const now = new Date().toLocaleString();
										document.title = \`编辑已保存 \${now}\`;
										updateStatus(\`已保存 \${now}\`);
									})
									.catch(error => {
										updateButtonText('处理错误');
										console.error('Save error:', error);
										updateStatus(\`保存失败: \${error.message}\`, true);
									})
									.finally(() => {
										resetButton();
									});
								} else {
									updateButtonText('检查内容变化');
									updateStatus('内容未变化');
									resetButton();
								}
							} catch (error) {
								console.error('保存过程出错:', error);
								button.textContent = '保存';
								button.disabled = false;
								const statusElem = document.getElementById('saveStatus');
								if (statusElem) {
									statusElem.textContent = \`错误: \${error.message}\`;
									statusElem.style.color = 'red';
								}
							}
						}
		
						textarea.addEventListener('blur', saveContent);
						textarea.addEventListener('input', () => {
							clearTimeout(timer);
							timer = setTimeout(saveContent, 5000);
						});
					}

					function toggleNotice() {
						const noticeContent = document.getElementById('noticeContent');
						const noticeToggle = document.getElementById('noticeToggle');
						if (noticeContent.style.display === 'none' || noticeContent.style.display === '') {
							noticeContent.style.display = 'block';
							noticeToggle.textContent = '隐藏访客订阅∧';
						} else {
							noticeContent.style.display = 'none';
							noticeToggle.textContent = '查看访客订阅∨';
						}
					}
			
					// 初始化 noticeContent 的 display 属性
					document.addEventListener('DOMContentLoaded', () => {
						document.getElementById('noticeContent').style.display = 'none';
					});
					</script>
				</body>
			</html>
		`;

		return new Response(html, {
			headers: { "Content-Type": "text/html;charset=utf-8" }
		});
	} catch (error) {
		console.error('处理请求时发生错误:', error);
		return new Response("服务器错误: " + error.message, {
			status: 500,
			headers: { "Content-Type": "text/plain;charset=utf-8" }
		});
	}
}
