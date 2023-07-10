import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'katex/dist/katex.min.css'

const Markdown = (props) => {
    return <ReactMarkdown
    className='markdown'
    children={props.content}
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
    components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, '')}
              style={oneDark}
              language={match[1]}
              PreTag="div"
              showLineNumbers={true}
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        }
      }}
  />
}

export default Markdown;