import './CTA.scss';

const CTA = ({ label, target }) => {
  return(
    <div className="cta__block">
      <a className="cta__action" href={target}>{ label }</a>
    </div>
  )
}

export default CTA;