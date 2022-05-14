var chai = require("chai"),
  chaiHttp = require("chai-http");
const dotenv = require("dotenv");

chai.use(chaiHttp);
dotenv.config();

describe("Testando o POST", () => {
  it("Deverá criar um novo usuario", (done) => {
    let user = {
      name: "jorge",
      birthday: "01-04-1982",
    };
    chai
      .request("localhost:" + process.env.PORTA)
      .post("/user")
      .type("json")
      .send(user)
      .end((error, response) => {
        if (error) {
          done(error);
        }
        chai.expect(error).to.be.null;
        chai.expect(response).to.have.status(201);

        done();
      });
  });
});

describe("Testando o GET", () => {
  it("Deverá mostrar todos os usuarios", (done) => {
    chai
      .request("localhost:" + process.env.PORTA)
      .get("/user")
      .end((error, response) => {
        if (error) {
          done(error);
        }
        chai.expect(error).to.be.null;
        chai.expect(response).to.have.status(200);

        done();
      });
  });
});

describe("Testando o PUT", () => {
  it("Deverá atualizar um cadastro de usuario", (done) => {
    let user = {
      name: "Matheus Saldanha Coelho",
      birthday: "02-12-1979",
    };

    chai
      .request("localhost:" + process.env.PORTA)
      .put("/user/id")
      .type("json")
      .send(user)
      .end((error, response) => {
        if (error) {
          done(error);
        }
        chai.expect(error).to.be.null;
        chai.expect(response).to.have.status(200);

        done();
      });
  });
});
