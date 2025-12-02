import Icon from '@mdi/react';
import { mdiHelpCircle } from '@mdi/js';

function setCookie() {
    localStorage.setItem('modalSeen', 'true');
}

interface Props {
    open: boolean,
    onClose: Function
}

function NewUserModal(props: Props) {
    const { open, onClose } = props;

    return (
        <>
            <div onClick={() => { setCookie(); onClose();}} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${open ? "visible bg-black/50" : "invisible"}`}>
                <div onClick={(e) => e.stopPropagation} className={`w-4/5 sm:w-1/2 h-4/5 bg-neutral-800 border-2 border-solid border-neutral-300 rounded-xl shadow transition-all ${open ? "opacity-100" : "opacity-0"}`}>
                    <div className='h-4/5 overflow-y-auto text-left pt-5 px-5'>
                        <h1 className='mb-4 text-center text-lg'>Cortex Plus Dice Pool Visualizer</h1>
                        <p className='mb-4'>Cortex Plus is the underpinning of multiple tabletop systems, including <i>The Firefly Role-Playing Game</i> and <i>Marvel Heroic Roleplaying</i>.</p>
                        <p className='mb-4'>To perform a roll in a Cortex Plus system, you assemble your dice pool from your character's abilities, and then roll all of those dice at once. You then select either two or three of these dice, and then add them together for your Result.</p>
                        <p className='mb-4'>In addition, a remaining die -- one which did not contribute to the Result -- is selected as the Effect Die for the roll. Any die that rolls a one additionally generates an Opportunity for your opponent, and cannot be used for your Result or Effect Die.</p>
                        <p className='mb-4'>Since it's not straightforward to figure out what to expect from a dice pool during play, I created this tool to visualize average Results, Effect Dice, and Opportunity generation for a given set of rolls.</p>
                        <p className='mb-4'>I hope this tool helps you as it did me. Happy gaming!</p>
                        <p className=''>To view this window again after closing it, click the <Icon path={mdiHelpCircle} size={0.75} className='inline align-text-top' /> icon in the top right.</p>
                    </div>
                    <div className='h-1/5'>
                        <div className='h-full flex justify-center items-center'>
                            <button className='border rounded-xl border-neutral-600 hover:border-neutral-300 transition-colors duration-250 px-4 py-2 active:scale-95' onClick={() => { setCookie(); onClose();}}>
                                <span>Close</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewUserModal;