
<h1 align="center"> API de Entregas - Rocketlog </h1>

<p align="center">
Esta API foi desenvolvida para gerir entregas, permitindo que vendedores registem pedidos, atualizem o estado das entregas e acompanhem o histórico de movimentações. <br/>
</p>

<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidade">Funcionalidade</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>


## Tecnologias

- **Typescript** 
- **Express.JS** 
- **Zod** 
- **SQLite**
- **Prisma ORM**
- **JWT**


## Funcionalidade 
- Autenticação de Utilizadores -> Suporte a diferentes papéis: sale (vendedor) e customer (cliente).
- Criação de Pedidos de Entrega -> Um vendedor pode criar um pedido e associá-lo a um cliente.
- Gestão de Status de Entregas ->  Cada pedido pode ter um status: processing, shipped e delivered.
- Registo de Movimentações -> É possível registar logs com descrições do progresso de uma entrega (ex: "Produto saiu para entrega").
  
## Licença

Esse projeto está sob a licença MIT.


---





