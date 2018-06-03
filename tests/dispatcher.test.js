import Dispatcher from '../dist/dispatcher';

test('Create dispatcher rpc url and status url', () => {
  const url = "gizo://304e301006072a8648ce3d020106052b81040021033a0004f14a7b28af6fdf3136779e0a82e618d5f481ab0377222e71c9473e552785eb4adedfb67030b15ba1d877f9e1a06dd8a58870dd1402da7e6e@99.233.0.99:9995"
  const dispatcher = new Dispatcher(url);
  expect(dispatcher.rpc()).toBe('http://99.233.0.99:9995:9995/rpc');
  expect(dispatcher.status()).toBe('http://99.233.0.99:9995:9995/status');
});