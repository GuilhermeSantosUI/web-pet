import { Layout } from "../../layout/Layout";
import { Aside } from "./modules";

import { Plus } from "@phosphor-icons/react";

import * as C from "./Updates.styles";

export function Updates() {
  return (
    <C.Container>
      <Layout>
        <div
          style={{
            width: "100%",
            maxWidth: 900,

            margin: "0 auto",

            display: "flex",
            flexFlow: "column",
            gap: 4,

            paddingBottom: 20,
          }}
        >
          <h2>Alterações</h2>
          <p style={{ color: "#8c8c8c" }}>Atualizações e ajustes do sistema</p>
        </div>

        <div className="timeline">
          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle">
              <Plus color="white" />
            </div>
          </div>

          <div
            className="timeline-content timeline-component"
            style={{
              width: "100%",
              maxWidth: 800,
              display: "flex",
              flexFlow: "column",
              gap: 20,
            }}
          >
            <img
              src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fcontentful%2Fimage%2Fe5382hct74si%2F6VQMsjhpegDltbqu5x9IPT%2Fbd1ea93275469e38e57fe7e27c86f4f2%2FInstant_Rollback_-_Light_Mode.png&w=3840&q=75&dpl=dpl_XLnvAu3WeSZQ4KMknkygPvSJ3to4"
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",

                borderRadius: 8,
                border: "1px solid #eaeaea",
              }}
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              <C.AvatarImage
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="user"
              />

              <C.AvatarImage
                src="https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg"
                alt="user"
              />
            </div>

            <h2>Restringir acesso com bloqueio de IP por faixa CIDR</h2>

            <div>
              <C.Paragraph>
                O Firewall da Vercel protege seu aplicativo contra ataques DDoS
                e acesso não autorizado.
              </C.Paragraph>

              <C.Paragraph>
                Equipes empresariais agora têm segurança aumentada com a
                capacidade de controlar o tráfego e restringir o acesso por meio
                de endereços IP estáticos ou faixas CIDR de rede inteiras.
              </C.Paragraph>

              <C.Paragraph>
                Mantenha-se seguro bloqueando sub-redes inteiras ou restringindo
                o acesso de redes não confiáveis para evitar ataques contra seus
                aplicativos.
              </C.Paragraph>

              <C.Paragraph>
                <a href="#">Saiba mais em nossa documentação</a> ou{" "}
                <a href="#">entre em contato com nossa equipe de vendas</a> para
                fazer upgrade para a versão Enterprise.
              </C.Paragraph>
            </div>
          </div>

          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle">
              <Plus color="white" />
            </div>
          </div>

          <div
            className="timeline-component timeline-content"
            style={{
              width: "100%",
              maxWidth: 800,

              display: "flex",
              flexFlow: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <C.AvatarImage
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="user"
              />

              <C.AvatarImage
                src="https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg"
                alt="user"
              />
            </div>

            <h2>Correção de bug nos agendamentos</h2>

            <div>
              <C.Paragraph>
                A correção de bug nos agendamentos resolve problemas
                relacionados aos agendamentos na aplicação.
              </C.Paragraph>

              <C.Paragraph>
                Mantenha seus agendamentos seguros e sem erros, evitando
                problemas e garantindo a satisfação dos usuários.
              </C.Paragraph>
            </div>
          </div>
        </div>
      </Layout>

      <Aside />
    </C.Container>
  );
}
