import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ChatMessage({ content }) {
  return (
    <ReactMarkdown
      components={{
        p({ children }) {
          return <>{children}</>; 
        },

        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline ? (
            <SyntaxHighlighter
              style={oneDark}
              language={match ? match[1] : "javascript"}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}