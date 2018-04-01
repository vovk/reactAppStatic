const place = document.getElementById('root');
// component  ~ создание класса в React.JS (header, sidebar и так далее)
let FirstComponent = React.createClass({
    //возвращаем то, что хотим отдать
    render: function () {
        const num = 1;

        return (<div>
                <h1>Games list {num}</h1>
                <span>title description</span>
            </div>);
    }
});

let Game = React.createClass({
    render: function () {
        return (<div className={'game'}>
                <h2>{this.props.name}</h2>
                <h3>{this.props.age}</h3>
            </div>);
    }
});

let Task = React.createClass({
    getInitialState: function () {
      return { edit: false }
    },
    edit: function () {
        this.setState({ edit: true });
    },
    save: function () {
        //передаем ссылку на textarea, в котором хотим изменить текст
        let taVal = this.refs.editTextarea.value;

        this.setState({ edit: false });
        this.renderDefault();
    },
    cancel: function () {
        this.setState({ edit: false });
    },
    renderDefault: function () {
        return (
            <div className="box">
                <div className="box-text">{this.props.children}</div>
                <div className="btn">
                    <button onClick={this.edit} className="btn-edit">Edit</button>
                    <button onClick={this.delete} className="btn-delete">Delete</button>
                </div>
            </div>
        );
    },
    renderEdit: function () {
        return (
            <div className="box">
                <textarea ref="editTextarea" defaultValue={this.props.children} className="textarea"/>
                <div className="btn">
                    <button onClick={this.save} className="btn-save">Save</button>
                    <button onClick={this.cancel} className="btn-cancel">Cancel</button>
                </div>
            </div>
        );
    },
    render: function () {
        if (this.state.edit) {
            return this.renderEdit();
        } else {
            return this.renderDefault();
        }
    }
});

ReactDOM.render(
    <div className="root-component">
        <FirstComponent />
        <hr/>
        <Game name="Forza" age={"18+"} />
        <Game name="MortalCombat" age={"16+"} />
        <Game name="GTA 5" age={"21+"} />
        <hr/>
        <Task />
        <Task>First Task</Task>
        <Task>Second Task</Task>
    </div>,
    place
);