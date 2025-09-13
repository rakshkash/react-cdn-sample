const head = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "hea1d" }, "This is a heading1"),
    React.createElement("h1", { id: "head2" }, "This is a heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head1" }, "This is a heading11"),
    React.createElement("h1", { id: "head22" }, "This is a heading22"),
  ]),
]);
console.log(head);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);
root.render(parent);
