var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from the component'
    };
  },

  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var firstName = "Alex";
var ohHey = "Oh hey";

ReactDOM.render(
  <Greeter name={firstName} message={ohHey} />,
  document.getElementById('app')
);

