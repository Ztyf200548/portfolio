// EXPORTS: portfolio data (projects, stats, skills, contact)

const BASE = (import.meta.env.MIAODA_CLIENT_BASE_PATH || '').replace(/\/$/, '') + '/';
export const img = (name: string) => `${BASE}images/${name}`;

export interface IProject {
  id: string;
  title: string;
  topic: string;
  cover: string;
  dataShot: string;
  plays: string;
  likes: string;
  shares: string;
  published: string;
  highlight?: boolean;
}

export const PROJECTS: IProject[] = [
  {
    id: 'kaili',
    title: '“网络开盒”他人信息，到底有多严重',
    topic: '网络安全 · 人格权',
    cover: '823ef8202d4dba036115151c1feb7998.jpg',
    dataShot: '7ac550a54cd363093b9d7b4a0e28318a.jpg',
    plays: '239.5万',
    likes: '22.7万',
    shares: '4.7万',
    published: '2026.08.09',
    highlight: true,
  },
  {
    id: 'consent',
    title: '性同意年龄为什么是 14 岁',
    topic: '刑法 · 未成年人保护',
    cover: 'af691915a1d1bfbd19d47d377d39e6bb.jpg',
    dataShot: 'b6ac0e000804ef2daaa9b20edbd4d023.jpg',
    plays: '30.3万',
    likes: '1.7万',
    shares: '4082',
    published: '2026.08.18',
  },
  {
    id: 'zhaijidi',
    title: '2027 年前宅基地不确权，会怎样',
    topic: '土地管理 · 农村权益',
    cover: 'f5faef255342d0969f2b5270854f2f0e.jpg',
    dataShot: 'e21bbf80242ef1adc9bfd020074b7815.jpg',
    plays: '15.1万',
    likes: '2929',
    shares: '2782',
    published: '2026.08.08',
  },
  {
    id: 'waijiaonv',
    title: '外嫁女到底有没有宅基地权益',
    topic: '婚姻家事 · 妇女权益',
    cover: 'ef4cf0b933e1ec3a2ab95ecbd9af24f7.jpg',
    dataShot: '29562c716cb52d5c56f6239e74fb79f1.jpg',
    plays: '13.3万',
    likes: '2552',
    shares: '627',
    published: '2026.08.11',
  },
];

export interface IStat {
  value: string;
  label: string;
}

export const ACCOUNT_STATS: IStat[] = [
  { value: '9674', label: '粉丝' },
  { value: '25.8万', label: '累计获赞' },
  { value: '239.5万', label: '单条最高播放' },
  { value: '47', label: '作品数量' },
];

export interface ISkill {
  title: string;
  desc: string;
  tags: string[];
}

export const SKILLS: ISkill[] = [
  {
    title: '从 0 到 1 账号操盘',
    desc: '独立完成选题、口播、剪辑、发布、复盘全流程，两个月内把法律科普号从冷启动做到近万粉。',
    tags: ['账号定位', '内容选题', '数据复盘'],
  },
  {
    title: '爆款选题与文案',
    desc: '拆解 10+ 头部法律账号爆款结构，用钩子开头 + 案例反转 + CTA 收口的模板写口播稿，跑出 239.5 万播放。',
    tags: ['爆款拆解', '口播文案', '钩子设计'],
  },
  {
    title: '剪映全流程制作',
    desc: '独立完成字幕、配音、BGM、封面设计、AI 数字人出镜，单条从脚本到成片 1–2 小时。',
    tags: ['剪映剪辑', '封面设计', 'AI 数字人'],
  },
  {
    title: 'AI 工具链提效',
    desc: '用 DeepSeek / 豆包 / ChatGPT 做选题扩写与初稿，即梦 AI 生成封面素材，把制作周期压缩到人工的 1/3。',
    tags: ['AI 文案', 'AI 生图', '工作流搭建'],
  },
];

export const CONTACT = {
  name: '周腾峰',
  role: '法律科普短视频主理人 · 新媒体运营方向',
  phone: '19168063990',
  email: '2679231959@qq.com',
  wechat: 'ZTF2679231959',
  douyin: 'https://v.douyin.com/G8cM9PDdS3M/',
  douyinName: '法言有声',
};
