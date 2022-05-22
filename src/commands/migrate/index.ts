import { Command, Flags } from "@oclif/core";
import determineIfIsCDKWorkspace from "../../utils/determineIfIsCDKWorkspace";
import updateNPMPackages from "../../utils/updateNPMPackages";

export default class MigrateCommand extends Command {
  static description = "Migrate a CDK Version Workspace to Version 2 Workspace";

  static examples = [
    `$ aws-cdk-v2-migrator migrate .
aws-cdk-v2-migrator migrate ./src/
`,
  ];

  static flags = {
    dryRun: Flags.boolean({
      char: "d",
      description:
        "Do not run the command, just print the command that would be run",
      required: false,
      default: false,
    }),
  };

  static args = [
    {
      name: "rootDir",
      description: "CDK workspace directory you want to perform migration on",
      required: false,
      default: ".",
    },
  ];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(MigrateCommand);
    const { rootDir } = args;
    const { dryRun } = flags;
    this.log(
      `Starting to migrate AWS CDK to Version 2 Workspace in ${rootDir}`
    );
    const isCDKWorkspace = await determineIfIsCDKWorkspace(rootDir);
    if (!isCDKWorkspace) {
      this.error("Directory is not a valid CDK workspace");
    }
    this.log(
      `Updating AWS CDK NPM packages in ${rootDir} to Version 2 Workspace`
    );
    await updateNPMPackages(rootDir, dryRun);

    if (dryRun) {
      this.log("No changes were made. Dry run completed");
    }
  }
}
