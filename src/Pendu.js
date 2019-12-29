import React from 'react';

class Pendu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word: 'jean-pierre',
            limit : 9,
            wrotes: [],
            value: '',
            wordTest: '',
            blindWord: '',
        }

        this.arrayTry = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setBlindWord();
    }

    setBlindWord(data = null) {
        var splitWord = this.state.word.split('');
        var arrayTry = this.arrayTry;
        var hiddenWord = "";

        if(data !== null) {
            arrayTry.push(data);
        }

        splitWord.forEach(function(letter) {
            if(arrayTry.indexOf(letter) !== -1) {
                hiddenWord += ' ' + letter + ' ';
            } else {
                hiddenWord += ' _ ';
            }
        });

        this.setState({
            blindWord: hiddenWord
        });
    }

    handleSubmit(event) {

        if(this.state.value === '' && this.state.wordTest === '') {
            alert("au moins un");
        } else {
            if(this.state.wordTest !== '') {
                if(this.state.word === this.state.wordTest) {
                    alert("Vous avez gagné");
                }
            } else {
                this.setBlindWord(this.state.value);
                this.state.wrotes.push(this.state.value);
            }

            this.setState({
                limit: this.state.limit - 1,
                value: '',
                wordTest: ''
            });
        }

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Lettre : <input type='text' value={this.state.value} name='value' onChange={this.handleChange} />
                    </div>
                    <div>
                        Essayer le mot : <input type='text' value={this.state.wordTest} name='wordTest' onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type='submit' value="tester" />
                    </div>
                </form>

                <div>
                    Nombre disponible : {this.state.limit}
                </div>
                <div>
                    Mot mystère : {this.state.blindWord}
                </div>
                <div>
                    Lettre saisi : {this.state.wrotes.map((letter, i) => {
                        return (<p key={i}>{letter}</p>)
                    })}
                </div>
            </div>
        );
    }
}

export default Pendu;