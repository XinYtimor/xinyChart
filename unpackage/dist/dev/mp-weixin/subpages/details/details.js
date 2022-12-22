"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toMsg() {
      common_vendor.index.switchTab({
        url: "/pages/msg/msg"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toMsg && $options.toMsg(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/app/xinychart/subpages/details/details.vue"]]);
wx.createPage(MiniProgramPage);
