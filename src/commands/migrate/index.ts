import { Command, Flags } from "@oclif/core";
import { join } from "node:path";

export default class MigrateCommand extends Command {
  static description = "Migrate a CDK Version Workspace to Version 2 Workspace";

  static examples = [
    `$ aws-cdk-v2-migrator migrate .
aws-cdk-v2-migrator migrate ./src/
`,
  ];

  static flags = {
    dryRun: Flags.string({
      char: "d",
      description:
        "Do not run the command, just print the command that would be run",
      required: false,
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

    const fullPath = join(__dirname, rootDir);

    this.log(`Migrating CDK Version 2 Workspace in ${fullPath}`);

    if (dryRun) {
      this.log(`Dry Run: ${dryRun}`);
    }
  }
}
