import React from 'react';
import {ReactComponent as Rock} from '../assets/icon-rock.svg'
import {ReactComponent as Paper} from '../assets/icon-paper.svg'
import {ReactComponent as Scissor} from '../assets/icon-scissors.svg'
import {ReactComponent as Triangle} from '../assets/bg-triangle.svg'
import {ReactComponent as Rules} from '../assets/image-rules.svg'


function Game(props) {
    const[playerChoice,setPlayerChoice]=React.useState('');
    const[compChoice,setCompChoice]=React.useState('');
    const[status,setStatus]=React.useState('');
    const[rulesActive,setRulesActive]=React.useState(false);

    const setChoices=(pchoice,cchoice)=>{
        setPlayerChoice(pchoice);
        setCompChoice(cchoice);
    }

    const computerChoice=()=>{
        const arr=['rock','paper','scissor']
        const rand=Math.floor(Math.random()*3);
        // console.log(arr[rand]);
        return arr[rand];
    };
    const playRound=(e)=>{
        // console.log(e.target.id);
        const playerChoice=e.target.id
        let compChoice=computerChoice();
        setChoices(playerChoice,compChoice);
        if((compChoice==='rock'&&playerChoice==='paper')||(compChoice==='paper'&&playerChoice==='scissor')||(compChoice==='scissor'&&playerChoice==='rock'))
        {
            console.log('you win');
            setStatus('You Won');
            props.incScore();
        }
        else if(compChoice===playerChoice){
            setStatus('Draw')
            console.log('Draw');
        }
        else{
            setStatus('You Lost');
            console.log('You Lose');
        }
    };
    const renderChoice=(choice)=>{
        if(choice==='paper')
        return(<div className="res-paper">
        <Paper className="paper"/>
        </div>);
        else if(choice==='rock')
        return(<div className="res-rock">
        <Rock className="rock"/>
        </div>);
        else{
            return( <div className="res-scissor">
            <Scissor className="scissor"/>
            </div>)
        }
    }

    return (
        <>
            {playerChoice===''?
            <div className="play">
                <div id='bg-triangle'>
                <Triangle className='bg-triangle'/>
                </div>
                <div id='paper' onClick={playRound}>
                <Paper className="paper"/>
                </div>
                <div id='rock' onClick={playRound}>
                <Rock className="rock"/>
                </div>
                <div id='scissor' onClick={playRound}>
                <Scissor className="scissor"/>
                </div>
            </div>
            :<div className="result">
                <div className={`pchoice ${status==='You Won'?'won':''}`}>
                <p className="ptitle">You Picked:</p>
                {renderChoice(playerChoice)}
                </div>
                <div className={`cchoice ${status==='You Lost'?'won':''}`}>
                <p className="ctitle">Computer Picked:</p>
                {renderChoice(compChoice)}
                </div>
                <div className='restart'>
                <p className="status">{status}</p>
                <button onClick={()=>{
                    setPlayerChoice('');
                    setCompChoice('');
                    setStatus('');
                }}>Play Again</button>
                </div>
                
            </div>
             }
                <button className='rules-btn' onClick={()=>{setRulesActive(true)}}>Rules</button>
                <div className={`rules popup ${rulesActive?'active':''}`}>
                    <div className='close' onClick={()=>{setRulesActive(false)}}>X</div>
                    <Rules />
                </div>
        </>);
}

export default Game;
