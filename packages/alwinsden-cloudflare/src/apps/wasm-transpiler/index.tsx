const WasmTranspiler = () => {
  return (
    <div>
      test
      <button
        onClick={async () => {
          const wasmJsPath = `${window.location.origin}/wasm-transpiler/build/index.js`;
          // @ts-ignore
          const wasm_import = await import(wasmJsPath);
          const loadWasm = wasm_import.default;
          await loadWasm({
            // @ts-ignore
            locateFile: path => {
              if (path.endsWith('.wasm')) {
                return '/wasm-transpiler/build/index.wasm';
              }
              return path;
            },
          });
        }}
      >
        test
      </button>
    </div>
  );
};

export default WasmTranspiler;
