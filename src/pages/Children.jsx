import { BackTitle } from "../components/BackTitle"

function CardHeader({ children }) {
  return <div className="p-4 text-lg font-bold">{children}</div>
}

function CardBody({ children }) {
  return <div className="p-4 text-sm">{children}</div>
}

function Card({ children }) {
  return <div className="rounded border shadow">{children}</div>
}

function Button({ children }) {
  return <button className="btn btn-primary">{children}</button>
}

export function Children() {
  return (
    <div>
      <BackTitle title="Children" />
      <br />
      <Button>Cliquez ici</Button>
      <br />
      <br />
      <hr />
      <br />
      <Card>
        <CardHeader>Titre de la carte</CardHeader>
        <CardBody>
          Je suis le corps de la carte Je suis le corps de la carte Je suis le
          corps de la carte Je suis le corps de la carte Je suis le corps de la
          carte
        </CardBody>
      </Card>
    </div>
  )
}
