import React from "react";
import "./styles.css";

const TodoItem = props => <li onClick={props.onClick}>{props.item.text}</li>;

class TodoList extends React.Component {
  render() {
    const { items, onClick } = this.props;
    return (
      <url onClick={onClick}>
        {items.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            onClick={this.handleItemClick.bind(this, item)}
          />
        ))}
      </url>
    );
  }
  handleItemClick(item, event) {}
}

export default function App() {
  const items = [
    { text: "Grocery", done: false },
    { text: "Play guitar", done: false },
    { text: "Romantic dinner", done: true }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TodoList items={items} />
    </div>
  );
}
