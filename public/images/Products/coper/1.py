import os

def rename_files_and_folders(directory):
    # Get a list of all files and folders in the given directory
    entries = os.listdir(directory)
    
    # Sort entries to maintain order
    entries.sort()

    # Initialize counters for file and folder renaming
    file_counter = 1
    folder_counter = 1

    for entry in entries:
        # Get full path of the entry
        full_path = os.path.join(directory, entry)
        
        # Determine if the entry is a file or a folder
        if os.path.isfile(full_path):
            # Create new name for the file
            new_name = f"{file_counter}{os.path.splitext(entry)[1]}"
            new_path = os.path.join(directory, new_name)
            # Rename the file
            os.rename(full_path, new_path)
            # Increment the file counter
            file_counter += 1
        elif os.path.isdir(full_path):
            # Create new name for the folder
            new_name = f"{folder_counter}"
            new_path = os.path.join(directory, new_name)
            # Rename the folder
            os.rename(full_path, new_path)
            # Increment the folder counter
            folder_counter += 1

if __name__ == "__main__":
    # Define the directory to be processed
    directory = input("Enter the path to the directory: ").strip()

    if os.path.isdir(directory):
        rename_files_and_folders(directory)
        print("Renaming complete.")
    else:
        print("The specified path is not a directory.")
