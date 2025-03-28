import LikeButton from '../components/like-button';


      function Header({ title }) {
        return <h1>{title ? title : "Default title"}</h1>
      }
 
      export default function HomePage() {
        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]
        
        const array = [];

        for (let i = 1; i <= 1000; i++) {
        array.push(i);
        }

        //console.log(array);

        let randomNumber = Math.floor(Math.random() * 1000);  // 0 <= randomNumber < 1000
        console.log(randomNumber);


        for (let i = 1; i <= 500; i++) {
          array.splice(randomNumber, 1);
          randomNumber = Math.floor(Math.random() * array.length);
          }
            //randomNumber =- 1;

          //console.log(array);

 
        return (
          <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            <p>{array.length} </p>

            <ul>
            {array.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          

            <LikeButton />
        
          </div>
        )
      }

    
