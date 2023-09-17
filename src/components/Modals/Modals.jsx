import './Modals.css'

const Modals = ({children, isOpenModal, closeModal}) => {
    return(
        <section className={`modal ${isOpenModal && 'is-open'}`}>
            <div className='modal-container'>
                {children}
            </div>
        </section>
    )
}

export default Modals;