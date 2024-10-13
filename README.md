# Overview (DermaDrill)

This app provides an interactive learning platform for medical students, focusing on dermatological diagnosis. It presents users with real-world images of skin conditions and challenges them to make a diagnosis. After each attempt, the app delivers personalized feedback, explaining the reasoning behind the correct answer, whether the diagnosis was accurate or not. By emphasizing pattern recognition and critical thinking, in concert with a comprehensive dataset of over 400,000 images, the app helps students refine their diagnostic skills in a hands-on manner. With its ability to adapt to individual performance, the app ensures a tailored learning experience, making it an effective tool for bridging the gap between theoretical knowledge and clinical application.

---

![image](https://github.com/user-attachments/assets/5e635ab6-62b8-40a7-8bbc-28ec777d5b1c)

# Inspiration

The inspiration for this app arose from two key insights about medical education. 
1. Medicine is inherently interdisciplinary. For example, in fields like dermatology, pattern recognition plays a vital role in diagnosis. Previous studies have shown that incorporating techniques from other fields, such as art analysis, can enhance these skills, highlighting the benefits of cross-disciplinary approaches. Additionally, with the rapid advancement of AI, which has its roots in pattern recognition, there is a tremendous opportunity to revolutionize medical training. 
2. Second, traditional methods like textbooks and static images often lack the interactivity and personalized feedback needed to develop diagnostic skills effectively. Current education emphasizes the knowledge of various diagnostic features, but not the ability to recognize such features. This app was designed to address these gaps, creating a dynamic, tech-driven solution to better prepare medical students for the complexities of real-world practice.

# What it does

This app provides an interactive learning platform for medical students, focusing on dermatological diagnosis. It presents users with real-world images of skin conditions and challenges them to make a diagnosis. After each attempt, the app delivers personalized feedback, explaining the reasoning behind the correct answer, whether the diagnosis was accurate or not. By emphasizing pattern recognition and critical thinking, in concert with a comprehensive dataset of over 400,000 images, the app helps students refine their diagnostic skills in a hands-on manner. With its ability to adapt to individual performance, the app ensures a tailored learning experience, making it an effective tool for bridging the gap between theoretical knowledge and clinical application.

# How we built it

To build the app, we utilized a variety of tools and technologies across both the frontend and backend. On the frontend, we implemented React with TypeScript and styled the interface using TailwindCSS. To track user progress in real time, we integrated React’s Rechart library, allowing us to display interactive statistical visualizations. Axios was employed to handle requests and responses between the frontend and backend, ensuring smooth communication. On the backend, we used Python with Pandas, Scikit-Learn, and Numpy to create a machine learning model capable of identifying key factors for diagnosis. Additionally, we integrated OpenAI’s API with Flask to generate large language model (LLM) responses from user input, making the app highly interactive and responsive.

# Challenges we ran into 

One of the primary challenges we encountered was integrating OpenAI’s API to deliver real-time feedback to users, which was critical for enhancing the app's personalized learning experience. Navigating the complexities of API communication and ensuring seamless functionality required significant troubleshooting. Additionally, learning how to use Flask to connect the frontend and backend posed another challenge, as some team members were unfamiliar with this framework. This required us to invest time in researching and experimenting with different approaches to ensure proper integration and communication between the app's components.

# Accomplishments we're proud of

We are particularly proud of successfully completing our first hackathon, where we built this app from concept to execution. Despite being new to many of the technologies involved, we developed a full-stack application, learning the theory and implementation of tools like Flask and OpenAI's API along the way. Another accomplishment was our ability to work as a cohesive team, bringing together members from diverse, interdisciplinary backgrounds, both in general interests and in past CS experiences. This collaborative effort allowed us to combine different skill sets and perspectives to create a functional and innovative app that addresses key gaps in medical education.

# What we learned

Throughout the development of this app, we learned the importance of interdisciplinary collaboration. By combining medical knowledge, AI, and software development, we were able to create a more effective and engaging tool than any one field could produce alone. We also gained a deeper understanding of the technical challenges that come with working on large datasets and implementing adaptive feedback systems. 

# What's next

Looking ahead, there are many areas our app can expand into. With AI identifying the reasoning behind a certain diagnosis, we can explore the potential for diagnostic assistance, where AI can identify areas that may be abnormal to ultimately support clinical decision-making, giving physicians another tool. Furthermore, in other fields that are based on image-based diagnosis, such as radiology or pathology, we can apply a similar identification and feedback system. Future applications of such an app can enhance clinical diagnostic abilities while acknowledging the complexities of real world practice.
