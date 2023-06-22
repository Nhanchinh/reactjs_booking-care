import EventEmmitter from 'events';
const _emitter = new EventEmmitter();
_emitter.setMaxListeners(0);
export default _emitter