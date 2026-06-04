export const IMAGE_RECOGNITION_FALLBACK_MESSAGE =
  "图片识别暂时失败，可能是图片过大、网络不稳定或模型返回异常。你可以保留图片预览，手动填写产品信息后继续生成进货报告，产品库、候选产品 PK 和测款复盘仍可正常使用。";

export const IMAGE_TOO_LARGE_FALLBACK_MESSAGE =
  "图片仍然过大，建议使用截图或更小尺寸图片；也可以手动填写产品信息继续生成报告。";

export const flowSteps = [
  ["上传产品图", "用样品图或供应商图完成出海选品的第一轮视觉筛选。"],
  ["AI识别推断", "补全品类、材质、人群和内容关键词，减少信息遗漏。"],
  ["基础利润测算", "先估算单件成本、基础毛利率和首批备货资金。"],
  ["出海前置筛选", "提示 MOQ、补货周期、同质化、包装和基础物流风险。"],
  ["内容测款", "先生成国内内容测款方案，为后续海外本地化迭代保留基础。"],
  ["候选产品库", "把每次判断保存为可比较、可复查的候选产品记录。"],
  ["候选PK", "对比评分、利润、风险和渠道适配，筛选优先拿样对象。"],
  ["测款复盘", "用真实互动、询单和成交数据决定优化、补货或放弃。"],
];

export const painPoints = [
  "凭感觉选品",
  "首批备货压力",
  "利润算不清",
  "出海前缺少筛选",
  "内容测款没方向",
  "测款后缺少复盘",
];

export const statusOptions = ["全部", "准备拿样", "正在测款", "建议补货", "暂不考虑"];

export const feedbackFormUrl = "https://v.wjx.cn/vm/r7Utha0.aspx";

export const IMAGE_COMPRESSION_OPTIONS = {
  maxWidth: 900,
  maxHeight: 900,
  targetDataUrlBytes: 450 * 1024,
  maxDataUrlBytes: 900 * 1024,
  compressionSteps: [
    { maxWidth: 900, maxHeight: 900, qualities: [0.68] },
    { maxWidth: 720, maxHeight: 720, qualities: [0.52] },
    { maxWidth: 512, maxHeight: 512, qualities: [0.36] },
    { maxWidth: 384, maxHeight: 384, qualities: [0.3] },
    { maxWidth: 320, maxHeight: 320, qualities: [0.24] },
  ],
};
