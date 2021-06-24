import { useParams } from 'react-router-dom';
import { Button } from "../components/Button";
import logoImg from '../assets/images/logo.svg';
import { RoomCode } from "../components/RoomCode";
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import '../styles/room.scss';
import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';

type RoomParams = {
    id: string;
}

export function Room() {
    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const roomId = params.id;

    const { title, questions } = useRoom(roomId);

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();

        if(newQuestion.trim() === '') {
            return;
        }

        if(!user) {
            throw new Error('You must be logger in');
        }

        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false
        };

        await database.ref(`rooms/${roomId}/questions`).push(question);
        setNewQuestion('');
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={params.id} />
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
                </div>

                <form onSubmit={handleSendQuestion}>
                    <textarea
                        placeholder="O que você quer perguntar"
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}>
                    </textarea>

                    <div className="form-footer">
                        { user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                        ) }
                        
                        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
                    </div>
                </form>

                {questions.map(question => {
                    return (
                        <Question
                            key={question.id}
                            content={question.content}
                            author={question.author}
                        />
                    );
                })}
            </main>
        </div>
    );
}