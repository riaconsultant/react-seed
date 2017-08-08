var react = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"ham1"},{"id":2,"text":"ham1"},{"id":3,"text":"ham3"},{"id":4,"text":"ham4"}];

var List = react.createClass({
    render: function(){
        var listItem= ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text}/>;
        });
        return (<ul> {listItem} </ul>);
    }
});

module.export = List;
