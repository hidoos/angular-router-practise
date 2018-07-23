# 各种加载策略

## lazy loading checklist

[ ] 1. 把 CrisisCenterRoutingModule 中的路径从 crisis-center 改为空字符串。
[ ] 2. 往 AppRoutingModule 中添加一个 crisis-center 路由
[ ] 3. 设置 loadChildren 字符串来加载 CrisisCenterModule
[ ] 4. 从 app.module.ts 中移除所有对 CrisisCenterModule 的引用
