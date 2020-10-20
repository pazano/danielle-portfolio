import './CTA.scss';

const CTA = ({ title, label, target }) => {
  return(
    <div className="cta__block">
      <h3>{title}</h3>
      <a className="cta__action" href={target}>{ label }</a>
    </div>
  )
}

export default CTA;