import { usuarios } from "./data";

function Usuario({ user, size }) {
  return (
    <div>
      <div>
        <h3>{user.name}</h3>
        <p>Rol: {user.role}</p>
        <p>Email: {user.email}</p>
      </div>

      <div>
        <img 
          src={user.image}
          alt={user.name}
          width={size}
          height={size}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {usuarios.map(usuario => (
        <Usuario
          key={usuario.id}
          user={{
            name: usuario.name,
            email: usuario.email,
            image: usuario.avatar,
            role: usuario.role
          }}
          size={50}
        />
      ))}
    </>
  );
}
