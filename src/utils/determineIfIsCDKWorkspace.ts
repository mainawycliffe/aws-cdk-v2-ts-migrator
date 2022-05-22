import { readdir, stat } from "fs-extra";

const filesInACdkWorkspace = new Set(["package.json", "cdk.json"]);

/**
 *
 * determineIfIsCDKWorkspace
 *
 * Determine if a directory is a CDK Workspace by checking if package.json and
 * cdk.json are present
 *
 */
export default async function determineIfIsCDKWorkspace(
  path: string
): Promise<boolean> {
  const statops = await stat(path);
  // must be a directory
  if (!statops.isDirectory()) {
    return false;
  }
  const files = await readdir(path);
  // if no files, then it's not a cdk workspace
  if (files.length === 0) {
    return false;
  }
  const filesInWorkspace = files.filter((file) =>
    filesInACdkWorkspace.has(file)
  );
  if (filesInWorkspace.length !== 2) {
    return false;
  }
  return true;
}
