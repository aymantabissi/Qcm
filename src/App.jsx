import { useState } from 'react';
import { questions } from './data/questions';

function App() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[current] = index;
    setAnswers(updatedAnswers);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  const getScore = () => {
    return answers.reduce((score, ans, idx) => {
      return score + (ans === questions[idx].correct ? 0.5 : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-white flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl transition-all duration-300">
        {!showScore ? (
          <>
            <h1 className="text-3xl font-extrabold text-blue-800 mb-4">
              Question {current + 1} / {questions.length}
            </h1>
            <p className="text-2xl text-gray-900 font-medium mb-8">
              {questions[current].question}
            </p>
            <div className="space-y-4">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full text-lg font-medium text-gray-800 px-6 py-4 border border-blue-200 rounded-xl bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-600 mb-6">Résultat</h2>
            <p className="text-2xl font-semibold text-gray-800">
              Votre score : <span className="text-green-700">{getScore()} / {questions.length * 0.5}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
