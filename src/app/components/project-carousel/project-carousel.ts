import { Component, Input } from '@angular/core';
import { ProjectImage } from '../../models/project.model';

@Component({
  selector: 'app-project-carousel',
  imports: [],
  templateUrl: './project-carousel.html',
  styleUrl: './project-carousel.css'
})
export class ProjectCarousel {
  @Input({ required: true }) images: ProjectImage[] = [];

  currentIndex = 0;
  isZoomOpen = false;

  get currentImage(): ProjectImage | null {
    if (this.images.length === 0) {
      return null;
    }

    return this.images[this.currentIndex];
  }

  previousImage(): void {
    if (this.images.length === 0) {
      return;
    }

    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage(): void {
    if (this.images.length === 0) {
      return;
    }

    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  navigate(event: KeyboardEvent): void {
    if (this.images.length < 2 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.previousImage();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.nextImage();
    }
  }

  openZoom(dialog: HTMLDialogElement): void {
    if (this.currentImage) {
      dialog.showModal();
      this.isZoomOpen = true;
    }
  }
}
