# Gemma 2 AI Hackathon - FeynAI
[Project URL](https://feyn-ai-jet.vercel.app/)


## Project Description
- An app for the hungry learner who wants to discover what they don't know.
- The app is based on the Feynman technique and forces the learner to explain complex topics in a simple and conise way to a curious 12 year old child called Feyn.
- Through this interaction via Chat Interface a sleek and dynamically created graph (similar to Obsidian graph view) appears with a node for your question and answer.
- If you get the answer correct and new question is asked, however, if you get the answer wrong you're no longer able to grow your graph.
- The idea is to add gamification and social networking to learning. 

**How big can you get your graph?**

**What did discover that you don't know?**

_Remember to use the hashtag #IYKYK and post pictures of how big your graph is on social media!_

### Project Flow
1. You choose a topic i.e. Cosmology
2. A question is generated by our Gemma model via Groq
3. The LLama model generates an ideal answer
4. You submit an answer via chat interface
5. The ideal answer and your answer are given to another LLama model to evaluate and score your answer between 0-100
6. If below 50, the answer is wrong and you're no longer able to continue growing your graph. You need to start over.
7. If you 50 and above, the answer is correct and is displayed alongside the question in the interactive graph view.
8. The Gemma model asks a follow-up question
9. Step 2-8 repeat



## Technologies used:

- Frontend: Next.js, Axios
- UX/UI: Figma
- Styling: Tailwind CSS
- Backend: Python, FastAPI, Groq
- Database: SQLite --> PostgreSQL
- Languages: Python, JavaScript
- Models: gemma2-9b-it, llama-3.1-70b-versatile
- Version Control: GitHub

## Future Features

_Since we only had 2 days to build this, you can imagine how much we didn't get to finish.. Below are a few of the features in our backlog that you can look forward to seeing_

1. Improve the UI/UX
2. Add a leaderboard which displays your ranking in a particular topic. Each question answerered increasing your score by 1.
3. Adding search functionality so you can view other people's graph on topics that you're interested in. This way you can see how others answered question you may have gotten wrong or you might have someone in mind that you want to beat. For example: you might want to beat Neil de grasse's score in Cosmology
4. Display your score for an answer to a question and depending on score out of 100 the node turns a different colour; greener for higher score and more red the lower the score.
5. Give feedback based on your answer and how you could've gotten a higher score when you click on a node
6. Finish off real time speech functionality
7. Fine-tune child model to have more of a childish tone.
   
**Note:** This is not an exhaustive list, just a few top priority one's that we had in our backlog

## Installing the Project

To clone the repo:

1. Copy the clone link
2. `Git clone <clone link>`

### Frontend

To install and use the frontend

```sh
# if not already in frontend directory
cd frontend
npm i
npm run dev
```

### Backend

To install and use the backend

```sh
# if not already in backend directory
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```
