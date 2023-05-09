import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

type markDownProps = {
  text: string;
};

const Markdown = ({ text }: markDownProps) => {
  return (
    <ReactMarkdown
      className="p-5 markdown-container"
      children={text}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              children={String(children).replace(/\n$/, '')}
            />
          ) : (
            <code className={className}>{children}</code>
          );
        },
      }}
    ></ReactMarkdown>
  );
};

export default Markdown;
