import React, { Component } from 'react';
import './App.scss';
import Input from './components/Input';
import Markdown from './components/Markdown';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markDown: sampleMarkdown,
    };
    this.updateMarkdown = this.updateMarkdown.bind(this);
    this.sampleMarkdown = this.sampleMarkdown.bind(this);
  }

  updateMarkdown(event) {
    this.setState({ markDown: event.target.value });
  }

  sampleMarkdown() {
    this.setState({ markDown: sampleMarkdown });
  }

  render() {
    return (
      <div className="App row">
        <div className="col-6 bg-secondary">
          <Input
            text={this.state.markDown}
            updateMarkdown={this.updateMarkdown}
            sampleMarkdown={this.sampleMarkdown}
          />
        </div>
        <div className="col-6">
          <Markdown text={this.state.markDown} />
        </div>
      </div>
    );
  }
}

const sampleMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

~~~javascript \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
~~~

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| ------------ | ------------- | ------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
