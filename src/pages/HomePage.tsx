import '../index.css'
import '../css/homepage.css'
import { signOut} from 'firebase/auth';
import {auth} from '../firebase'
import { Link } from 'react-router-dom';

export default function HomePage() {

  const logout = async () => {
    const response = await signOut(auth)
    console.log(response);
  }

  const conversations = [
    {
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Usuario 1',
      lastMessage: 'Hola, ¿cómo estás?',
    },
    {
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      name: 'Usuario 2',
      lastMessage: '¡Hola! Todo bien, ¿y tú?',
    },
    {
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'Usuario 3',
      lastMessage: '¿Nos vemos mañana  va va ?',
    },
    {
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Usuario 4',
      lastMessage: '¡Claro! Nos vemos mañanaaaaa.',
    },
    {
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Usuario 1',
      lastMessage: 'Hola, ¿cómo estás?',
    },
    {
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      name: 'Usuario 2',
      lastMessage: '¡Hola! Todo bien, ¿y tú?',
    },
    {
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'Usuario 3',
      lastMessage: '¿Nos vemos mañana  va va ?',
    },
    {
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Usuario 4',
      lastMessage: '¡Claro! Nos vemos mañanaaaaa.',
    },
    {
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Usuario 1',
      lastMessage: 'Hola, ¿cómo estás?',
    },
    {
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      name: 'Usuario 2',
      lastMessage: '¡Hola! Todo bien, ¿y tú?',
    },
    {
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'Usuario 3',
      lastMessage: '¿Nos vemos mañana  va va ?',
    },
    {
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Usuario 4',
      lastMessage: '¡Claro! Nos vemos mañanaaaaa.',
    },
    // Más conversaciones aquí...
  ];

  const stories = [
  'https://randomuser.me/api/portraits/men/3.jpg',
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/women/3.jpg',
  // Más URLs de imágenes aquí...
];

  return (
    
    <section className='Container'> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      <section className='sideBar'>
        <div className="sideBar__nav">
            <ul className='nav'>
              {/* icono de chats */}
              <li className='liopc'>
                <Link to="/">
                  <img className='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD7ElEQVR4nO2ZXYhWVRSGv8mckRmdUGiEpC6iIRwVQYaaLqQRIbrIqJCxQDGQHBTxJ7oMQiwTQYQgSPQmRrsxqUAx9coLQSXwp0ydFEctDALFv5p+nCeW8x482HfmW/ucfXSg74WB4dvv3ut9z95n7b3XqVTqqKOOwgAagR7gC+AMcIvycEsxdihmYywTbwDneXg4B7xexMAjwMbUgCeAlUAH0BLlKVWP2wJMA1YBJ1PxN5imPAMmJgaB3lyDFATDD3OZNNw1k2c5JSZeLE2pX093ysxrIS928k70VkYJgOXS9BMw1tOhJ/VOPPDllAVgDPC9tM33dLAUa1hZk/zfvo8DbwLbgMPAAHBbfxf0m7UtMG6O8VdL23YP+azIHQEBngO+BO4EpFXj7gQ6A+JMU98zHvINkSc4uJOBb1Li/gB2A2uALuApoFl/9v8LwLvAHnETfAW0OeJNEP+Gx8hdOHgvA7+KfhVY5xGT6t8GfAhc0xhXgJdi6XMRZSJJhweAKV4DGbNqs2j4C5hXVJ+LCMxNmfgIaMjpIT1mA/BxannOyavPRdQavSzKxoL6q42/SWNfBMaH6nMTgU/UfKiMPYbhvcJStGFzqD4XEZioJfWPpcFI2qvFn6EYtsQe8+oLMbJUTXsj6s7SsE+xlnj1hRjZq6aFETVnaVikWHu8+kKM/KKm0pZVAmC6Yl0qw0iSclsrJQNoVaxBr74QI3bwMzRH1JylYaJi/e7VF2LETrKG9oiaszTMVKwBr74QI7vUtDii5iwN7yjW1159IUaSwb+NqDlLw8GsDBnDSKuO+HaPmBVR9/1xuoAh4Ga1ak1hI2p7X81HXPfmQDBcL0ius+tC9bmJwDjd5Q1bYpx87yv9fK6xrdI4LlRfEBF4FvhNtM+ARwt6sDHHAls15vWRrr/RjIjTmTJzqEhK1oM5qrFuA7OL6gsiAk8Dx0X/E/gg0EC7ludgqsb7fCx9fuK9lzO5pl7Tb03AW1YRBKYCTwBPahZf0U3waKri8rcMVb1IPSgjzyhNGt4D3lb9ygNbRp/azHpi5THiKgcBk4BT4g6pkpLgO9uVgR+Bn+0Uq1nYrRmZm5WVYpaDXAU6YH+Vp3xYJddoaTnjeO8q0NmXIsOqGrxjKt+Y+LV20KuUDIYLf4a+kCL2yZEKDCoUNMUWWyPeDyFF7EalQsOyyigBsEKa+t3HI/tmp06W47tLV1lbzxztVZZUXg3tvCFlxj6yjClN6cjLaYVMGNbnPcQlZtCpdLVK+67NKw+A8cpOa1LvhM3E+kJFQe3Q9rnrYaE/eDnVOJ3Oty9FwOnUbl4Gbmoj7VPM6PeeOur4P+JfP0o1QKd+rpIAAAAASUVORK5CYII=" alt="" />
                </Link> 
              </li>
              <li className='liopc'>
                <Link to='/perfil'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEIUlEQVR4nO2aSWyNURTHX7VaokKLEkMMKzWEkAh7YkgMZWVaSq1arW5slB3CqoYKsbASS0MNC0NIzXNiqBJBiSkSiVK0PzlxXty8fP2+e++7VaT/pOnLu2f4/u/ee+45536pVA/+UwADgUXANuAo8AB4B3zRP/l8HziiMguBAam/AUABsBI4CfzAHaJzAlghtlLdQKAPUA20GA/1FTgH1AJlwERgkMr20c+TgKUqcx5oM/RfAutE9k+RmA80Gw9wAygHijxsFanuTcPeY2BuV8/CbsOhOJ8XyHaO/kC3Dft1wZcbMBS4rg5agUogN6iTX37ygCoNDoKrQEko42N0ugUPgckJ8qXABuAs8ESJfwaeAgeBWRY+pwBN6lP+jwkxE2kSl2XDxsgOBg4A7QmRqgPYHGfLsHfFIFOSzZ5IL6dLQGGMbAlwDzd8B/YC/WLsFhpkrnrtGWCPsZziZqIXcAF/XATyE2amSWV3upJYoIqtFntiGdmjJsHHVCMA2IVmoK9uUkGFhbykI9nimYWfKpVtslpiwHrjnMi1iP+fCINxFqH5jspW2mzwFtspBIYQDrMdlvzL2FkBVqng9SSjKj8sIJElFv5yjHRmeZzgaRVaY0lEwm4oWG1iYK3KN8QlcD80ix1oabS/HnAhMN7SZ7Fmzd8j6xmZWjV4xsagofc8AIl2l/SdXyWAYGHU4HYd3OhIpCEAkbuOPjep3raowWM6uNjR6K4ARA44+ixTvSNRg+k0oNTBoKQnrwMQeSW2UvZ+pfoUPIwa/KCDxQ4GZeOFgnWFaZxfb6MG0/VzpwlchE5vIwfKBl8c/Rao3tcgRFRPOijZIvpMSCbSFmRpqd50rQB9IbrTHH0OVt33cZvd6mDqJIr4oMzD34S4zd7gE36NqX7rQeKN61LOOLyPpTIB7PA5EA39Gg8i1Z6+auMORK8UJSOCXXMgITV4nqevc3EpyiBNxKyTxggbIx2IjPD0UawR9lunzwmccknjI/TzHYj4zka56h+PE1qtQjc8nUhab4tCD/s5RmG1Min6WJe6EfpjHYg4dw/5Xeq+SIx2RvS55dLf1daqdCNtIU2/0Q728yTdV911NgoFRjuo0kJ+BrDP83QXnf3ATAs/1arTZH326BR2dNag0xShIuMaIFvIr10V1eM1GnQdzlcZRsv0Ubplql3yQxk3TaHxDTgsD2+k7OlGep0TCaPjmG4gN+olT1KnPSTagXpj3zV6X8tp30ruNbobT+SKw4uEQWaUMbXdgacS1rMiYZAZ7hhaQ6FRVkUQEhl94fqADbk4dGh3puvu3iX8dfG+aQbmdBmBiEOzSts4oSCpUaVPoRWCUL6+fnFS478r2vQVjuVSz6T+BmgTXIqzrVo2yws0H42H/qjfydgWKal93pboQeofwU+gJXqFjq8BQAAAAABJRU5ErkJggg=="></img>
                </Link>
              </li>
              <li className='liopc'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADk0lEQVR4nM2aS0gVURjHp4c9yFIQhXARtLAIilpoBlnkxvZh2cZ2rYNKokW06KVi0MMWihSEvaSFCRUERWhmSFCtwkcvMzIiUeyl6S8Onpun8czMmeHOcX4gXp3znfn+Z8493+Nex5lDgFXAGaAfOKq5Xg98Bc4B65ykAcwDLgN/mEG8LlTGlDKbm06SADKBKY2jL4CFwGLgteb6b2C+kySAHvSMyB8d3U7SkFsrLPVJcHyZ5o0clibFPgNYDyy1KeKidKRHPokoIlK0AA+AMfn3bVsicoCfxMcUsNaGkEMhHRsFhkLaXLAhpNvQmSdAsWJXALQa2r6xIeQgMBHgyDNgicZ2PnAnwHYY2BW7EOnQJumsF9t9bAt87NqAfCsiXKv7QePMeFC0Bj5p7IbseT87vxLJoRuRY2UE2H7R2H0DVthTMO3IGuChzxYp87Hd6GM3CFTYErEf+IU/L0Ui6cy2XQQ8JpjrNoR0YsYrYKfMfheIAwB4amg7GNW5Uhm43MdgoWbsAcIxaXBcu6mNKuS8x4QnNGOXa0SnO0UpiCpEJG06Wj3Gi3JW8F7sZ+CSR2FlwmngOHBfpjINfo5mySyzAcjWXB/wuEm/Zmy2nOeemFf5/ynCczXMagsRXYqxWMVtyvV8n9UU+ztPGVsCvFOud6XEAHURhDyKKkINWmeBZoOjVNQJjUCNq7nwnxiZJOoYAJ57LNYPUc+bCLmGHZqVwkilN1Xx+ZTCG0yEiFW3gbhPrevpiidQ6irIhlw52RXTJyLaNH0xi+hNRXEgF6iSwfCkxp8yuRWPASsDBbiMt3js7XQwoRZPsUO0E8WEamsiBMANA6fagcNApdweHQY2jY7lxvK4jzNjXqUlUA58D7DNi8vxHaILIdOOjwar6lsfA7sD7MXp9Ba4K0+uknQJGcWcdsM5vYKdjpF0CQlDleGcR8JMOhdCKg3nrEy6kKokP5HhEPfsSHN5KxhOl5AiWay0ydMkiPKA+fYanFr9sh0qapKitAiJEEdEnNjjYVthEEdynYRF9k75Xtgnf3cmKrLHnM7XOLYAtsaY/U6qNUecIrJcNXYciFI2J24hDdihKW4hLZaE3IpbSJZPF6VONtfEtw9MuijVHq3Pfy0h22L6RPmrXF8dEOzUvlaxrNHtinCJaZbHsK7d/zlEpzFT6YnZE2GCz4c22t5vYmHmmwxuZrV0Eg3T5bHu85HNc+XUX8Qfb8q38E3CAAAAAElFTkSuQmCC"></img></li>
              <li className='liopc' onClick={logout}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXklEQVR4nO2aS0hVURSGj6lZVvaAJLIyKJpECEGR0CAy6EUWRQlFpEEEjZs0s6QgmmRlJRTNInvhoEGQjooogm4SUWlBKpmQ2Ut6+fhi45au23Vf+7zuDb/RgXv2Wus/Z+991lr7Os44/ynAbGA3cA5oBt4D3/iHum4H7gFngJ1qjJMOAFOA/cBDYJDUGdSi9wGTwhJwBOjFOz4Ah4HJQYnYDnThH2+BTX4KmApcTTBNHgHHgHJgMTDNGL9E/3YCeAwMxbF33vPpBhQDLTEc9ujgiy3sLgKOA59j2H4CFHolQj3ZTsHJL+AoUOCBj+nASeCP4KcNWOjWwVygQzD+FFjqVoDgbxnwQvDX6urNAKcFo9eAfE8VjPaZD9wW/Ko1lWdrtNYwdgnI8jz6sX6zgSuCmFo3U+sB8EkvygmeRx1fTKMhRO1yZU6mwfCW/VJYL3ZTLEyA5cCAIeaQG4NZQU6tBGv1HZDrWKYlH4HvQKUTTmbdZ4jZkaqRCqA/yoASk+1b1Ml/ChrdiBhJSXzfgk2AEiOO3yoLtxXRn/Ir9RDG7mDrbUVUBBa1gK4+o6nJOBEKYK8R100n00QogJVGbC2OCbBVEOE13cAuxxKgyLDXKd0kpet+0GP7YQUKDFtfpZtUrRwE3bbbN8MFWDRfpJvW6arPT14BG2xEKIB5hr0ORwLYLIhRqfMBJw0ASo3YIvFuTlsxQKURV0OiAWkpBqg3YqpOZlAsMXsCiVpA2JDWJjtQEtPjhACwwojjR0oNPEFMWEIuGkKu2xgp01unqszKfYk0cRPkpyFki5NpAJcNEW+AHCeTAFYLze4qG0OBV4MjALP0KVc0kZRLbdU8Bp7rJ1Jn1bmwBMjTp1nm0UWpjbE6c6cIYm4yLOIWY6mxNXhKMHYXmOF59KOnU7Pgt8m6e6P7Sa8Fo61Wrzi5hd0u+HumUni3xot04CYDuhkwx6PvhNpih2KIcO1jxFEhcB+ZPi2oxDLtuBCnDmpy/SYEpxOBswkOMNv0BlGpg1yg1hMwE5gPrNK/1SeoSAfVwva1owmsiTHVvCLix/qLJSYXOBjjkNQW9XCqwugrK0E5wDbgjpDUJYNKxRtUAhiKgDiHmBv1mfsNnRG06zP0Xn0d0YFXq6IolP+fjOMEw19WfAPybUzptAAAAABJRU5ErkJggg=="></img></li>
            </ul>
        </div>
        <div className="sideBar__right">
          <div className="sideBar__header">
            {/* Buscador de mensajes */}
            <h2 className='tituloM'>Messages</h2>
            <div className="searchContainer">
              <input type="text" className="searchMessages" placeholder="Buscar mensajes..." />
              <i className="fas fa-search searchIcon"></i>
            </div>
          </div>
          <p className='ph'>Historias</p>
          <div className="sideBar_stories">
            {/* Historias */}
            {stories.map((story, index) => (
              <div className="story" key={index}>
                <img src={story} alt="Historia del usuario" />
              </div>
            ))}
          </div>
          <p className='ph'>Conversaciones</p>
          <div className="sideBar__conversations">
            {/* Lista de conversaciones */}
            {conversations.map((conversation, index) => (
              <div className="conversation" key={index}>
                <img src={conversation.image} alt={conversation.name} />
                <div className='conversation_data'>
                  <h2>{conversation.name}</h2>
                  <p>{conversation.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </section>
      <section className='main'>
        {/* <section className='mainHeader'>
          <div className="DatosMessage">
            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
            <h2>Usuario 1</h2>
          </div>
          <h1>Lo sentimos</h1>
        </section> */}
        <div className='bienvenida'>
          <h1>¡Bienvenido a SecureChat!</h1>
          <p>Selecciona una conversación para empezar a chatear.</p>
        </div>
      </section>
    </section>
  )
}
