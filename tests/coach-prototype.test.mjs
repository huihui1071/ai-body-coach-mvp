import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);

test("prototype keeps the confirmed four-tab navigation", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  for (const label of ["首页", "会员", "待办", "我的"]) assert.match(page, new RegExp(label));
  assert.doesNotMatch(page, /label:\s*["']AI["']/);
});

test("prototype covers all three ordinary-member permission states", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  for (const mode of ["free", "mine", "other"]) assert.match(page, new RegExp(`followMode:\\s*["']${mode}["']`));
  assert.match(page, /手机号、跟进人和具体备注已隐藏/);
  assert.match(page, /普通会员不能生成训练方案/);
});

test("prototype data is explicitly labeled as anonymized or simulated", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  assert.match(page, /附件历史样例并脱敏/);
  assert.match(page, /历史对比为模拟数据/);
});
