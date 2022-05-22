import { readFile, writeFile } from "fs-extra";
import { join } from "node:path";

type PackageJSON = {
  dependencies: { [key: string]: string };
  devDependencies: { [key: string]: string };
};

export default async function updateNPMPackages(
  rootDir: string,
  dryRun = false
): Promise<void> {
  const packageJSON = join(rootDir, "package.json");
  const file = await readFile(packageJSON, "utf8");
  const json = JSON.parse(file) as PackageJSON;
  const { dependencies, devDependencies } = json;

  // remove @aws-cdk/* from dependencies
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(dependencies)) {
    if (key.startsWith("@aws-cdk/") && key !== "@aws-cdk/assert") {
      delete dependencies[key];
    }
  }

  // remove @aws-cdk/* from devDependencies
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(devDependencies)) {
    if (key.startsWith("@aws-cdk/") && key !== "@aws-cdk/assert") {
      delete devDependencies[key];
    }
  }

  // add aws-cdk-lib to dependencies, this will add it to the package.json file
  // in either devDependencies or dependencies depending on where the rest of
  // the aws-cdk packages are installed
  if (!devDependencies["aws-cdk-lib"] && !dependencies["aws-cdk-lib"]) {
    // if @aws-cdk/assert is in the devDependencies add aws-cdk-lib to devDependencies
    if (devDependencies["@aws-cdk/assert"]) {
      devDependencies["aws-cdk-lib"] = "^2.0.0";
    }

    // if @aws-cdk/assert is in the dependencies add aws-cdk-lib to dependencies
    if (dependencies["@aws-cdk/assert"]) {
      dependencies["aws-cdk-lib"] = "^2.0.0";
    }
  }

  // update devDependencies @aws-cdk/assert to version 2.0.0, if present
  if (devDependencies["@aws-cdk/assert"]) {
    devDependencies["@aws-cdk/assert"] = "^2.0.0";
  }

  // update dependencies @aws-cdk/assert to version 2.0.0, if present
  if (dependencies["@aws-cdk/assert"]) {
    dependencies["@aws-cdk/assert"] = "^2.0.0";
  }

  json.dependencies = dependencies;
  json.devDependencies = devDependencies;

  // if dryRun, don't write the file
  if (dryRun) {
    return;
  }

  await writeFile(packageJSON, JSON.stringify(json, null, 2));
}
