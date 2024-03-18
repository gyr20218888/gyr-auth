# gyr-auth

本地 Token 管理

```sh
npm install gyr-auth
```

```js
import { getToken, setToken, removeToken } from "gyr-auth";
```

## example

```vue
<LzzsHints
  title="操作提示"
  hints="[
          '系统支持最多10种内部支付类型，每种支付类型对应一种货币, ID分别为0~9',
          '若为在线支付或其它非系统内的货币，不能在这里设置'
        ]"
></LzzsHints>
```
