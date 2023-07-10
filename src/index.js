import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Markdown from './components/Markdown/Markdown.component'


const content = String.raw`Given a **formula** below
$$
s = ut + \frac{1}{2}at^{2}
$$
Calculate the value of $s$ when $u = 10\frac{m}{s}$ and $a = 2\frac{m}{s^{2}}$ at $t = 1s$

![hello](https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_og_01.jpg)


~~~c
void make_set(int v) {
    parent[v] = v;
}

int find_set(int v) {
    if (v == parent[v])
        return v;
    return find_set(parent[v]);
}

void union_sets(int a, int b) {
    a = find_set(a);
    b = find_set(b);
    if (a != b)
        parent[b] = a;
}
~~~

~~~js
console.log('Hello');
~~~
> hello
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <Markdown content={content} />
</>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
