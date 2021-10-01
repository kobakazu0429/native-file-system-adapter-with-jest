import path from "path";
import { getOriginPrivateDirectory } from "native-file-system-adapter";
import node from "native-file-system-adapter/src/adapters/node";

describe("test", () => {
  test("node", async () => {
    const rootHandle = await getOriginPrivateDirectory(
      node,
      path.resolve(path.join(__dirname, "fixtures"))
    );

    const [foo] = await Promise.all([rootHandle.getDirectoryHandle("foo")]);

    const bar = await (await foo.getFileHandle("bar.txt")).getFile();
    expect(bar.text).toBe("hello");
  });
});
