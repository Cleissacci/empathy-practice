Radio button — group several under one `name`.

```jsx
<Radio name="contact" value="email" checked={c==='email'} onChange={()=>setC('email')} label="Email — gentle nudges only" />
<Radio name="contact" value="sms" checked={c==='sms'} onChange={()=>setC('sms')} label="SMS — session reminders" />
```
